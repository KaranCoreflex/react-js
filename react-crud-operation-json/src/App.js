import './App.css';
import React, {useState, useEffect} from 'react';
import { Table, Container, Row, Col, Button, ButtonGroup, Form, Navbar } from 'react-bootstrap';
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const api = "http://localhost:5000/users"; 

const initialState = {
  name:"",
  email:"",
  contact:"",
  address:"",
}

function App() {

  const [state, setState] = useState(initialState);
  const [data,setData] = useState([]);
  const [userId, setUserId] = useState(null);
  const [editmode, setEditmode] = useState(false);
  const [error, setError] = useState("");
  
  const {name, email, contact, address} = state;


  useEffect(()=>{
    loadUser()
  },[])

  const loadUser = async () => {
    try {
      const response = await axios.get(api);
      setData(response.data)
    } catch (error) {
      // console.log(error.message)
      setError(error.message)
    }
     
  }
  // console.log(data);

  const handleSubmit = (e) =>{
      e.preventDefault();
      if(!name || !address || !contact || !email){
          toast.error("Please Fill All Inout Field")
      }else{
        if(!editmode){
          axios.post(api, state)
          toast.success("Added Sucessfully")
          setState({name:"", email:"", contact:"", address:""});
          setTimeout(()=>loadUser(), 500)
        }else{
          axios.put(`${api}/${userId}`, state)
          toast.success("Update Sucessfully")
          setState({name:"", email:"", contact:"", address:""});
          setTimeout(()=>loadUser(), 500)
          setUserId(null);
          setEditmode(false);
        }
      }
  }

  const handleChange = (e) => {
      let {name, value} = e.target;
      setState({...state, [name]:value});
  }

  const handleDelete =  async (id) => {
      if(window.confirm("Are you wamted to delete that user ?")){
        axios.delete(`${api}/${id}`);
        toast.success("Deleted Sucessfully");
        setTimeout(()=>loadUser(), 500)
      }
  }

  const handleUpdate = (id) => {
      const singleUser = data.find((item)=> item.id === id)
      setState({...singleUser});
      setUserId(id);
      setEditmode(true);
  }

  return (
   <>
      <ToastContainer />
      <Navbar bg="primary" variant="dark" className='justify-content-center'>
        <Navbar.Brand>
          Build and Deploy React App using JSON server on Heroku
        </Navbar.Brand>
      </Navbar>

      <Container style={{marginTop:"70px"}}>
        <Row>
          <Col md={4}>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label style={{textAlign:"left"}} >Name</Form.Label>
                <Form.Control type='text' placeholder='Enter Name' name='name' value={name} onChange={handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{textAlign:"left"}} >Email</Form.Label>
                <Form.Control type='text' placeholder='Enter Email' name='email' value={email} onChange={handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{textAlign:"left"}} >Contact</Form.Label>
                <Form.Control type='text' placeholder='Enter Contact' name='contact' value={contact} onChange={handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label style={{textAlign:"left"}} >Address</Form.Label>
                <Form.Control type='text' placeholder='Enter Address' name='address' value={address} onChange={handleChange}/>
              </Form.Group>
              <div className="d-grid gap-2 mt-2">
                <Button type='submit' varient='primary' size='sm'>
                {editmode ? "Update" : "Submit"}
                </Button>
              </div>
            

            </Form>
          </Col>
          <Col md={8}>
            {error ? <h2>{error}</h2> : <Table bordered hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              {data?.map((item,index)=>(

                <tbody key={index}>
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>{item.address}</td>
                    <td>
                      <ButtonGroup>
                        <Button style={{marginRight:"5px"}} variant="secondary" onClick={()=>handleUpdate(item.id)}>
                          Update
                        </Button>
                        <Button style={{marginRight:"5px"}} variant="danger" onClick={()=>handleDelete(item.id)}>
                          Delete
                        </Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                </tbody>
              )
              )}
            </Table>}
          </Col>
        </Row>
      </Container>
      
   </>
  );
}

export default App;
