import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ThankYou from '../Assignment-3/ThankYou';
import "./contact.css"

function Contact() {

  const initialValues = { username: "", email: "", phoneno: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const goNextPage = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

 useEffect(()=>{
  //  if(Object.entries(formValues))
 if(Object.entries(formErrors).length <=0 && isSubmit ){
  goNextPage('/thankyou',{ state:formValues})
 }
 },[formErrors,isSubmit])
 

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // goNextPage('/thankyou',{ state:formValues})
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phoneno) {
      errors.phoneno = "Phone no is required";
    }else if (values.phoneno.length !== 10  ) {
      errors.phoneno = "Phone number must be 10 degit";
    }
    return errors;
  };



  return (
    <div className='container'>


      <div className="App">
        <form onSubmit={handleSubmit}> 
          <h2 className='mt-3 mb-2 text-center'>Login Form</h2>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label className='col-md-1 p-0'>Username</label>
              <input
                type="text"
                className='col-md-3'
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p className='contact_error'>{formErrors.username}</p>
            <div className="field">
              <label className='col-md-1 p-0'>Email</label>
              <input
                type="text"
                className='col-md-3'
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p className='contact_error'>{formErrors.email}</p>
            <div className="field">
              <label className='col-md-1 p-0'>Phone No</label>
              <input
                type="number"
                className='col-md-3'
                name="phoneno"
                placeholder="Phone No"
                value={formValues.phoneno}
                onChange={handleChange}
              />
            </div>
            <p className='contact_error'>{formErrors.phoneno}</p>
            <button className="fluid ui button blue btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact