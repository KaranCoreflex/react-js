import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { update } from '../redux/userSlice';
import LeftBar from './LeftBar';

function Form() {

    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    
    const dispatch = useDispatch();

    const handelUpdate = (e) =>{ 
        const user={
            name:name,
            email:email
        }
        e.preventDefault();
        dispatch(update(user))
    }

  return (
      <>
    <div className='row'>
        <div className='col-md-2 mt-3'>
            <LeftBar/>
        </div>

        <div className='col-md-5 mt-3'>
            <form>
                <div className="mb-3">
                    <label  className="form-label">User Name</label>
                    <input type="text" 
                    className="form-control" 
                    id="userName" 
                    placeholder="User Name" 
                    onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="name@example.com"
                    onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <button className='btn btn-primary' onClick={handelUpdate}>Update</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Form