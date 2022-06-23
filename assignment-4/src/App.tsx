import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './component/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import SingleCountry from './component/SingleCountry/SingleCountry';
import { useAppSelector } from './app/hooks';
import { LinearProgress } from '@mui/material';
import { Header } from './component/Header/Header';
import { L1Assignment } from './component/L1-assignment/L1Assignment';
import Contact from './component/Assignment-3/Contact';
import ThankYou from './component/Assignment-3/ThankYou';
import EmpList from './component/Assignment-2/EmpList';
import { DisplayData } from './component/L2-assignment/DisplayData';
import { MuiTable } from './component/muitable/MuiTable';
import { Button, Modal } from 'react-bootstrap';

function App() {
  const {loading} = useAppSelector((state)=> state.country)

  const [displayForm, setDispayForm] = useState(true);
  const [modelData, setModelData] = useState([] as string[]);
  const handleClose = () => {
      // setDispayForm(modelData.length >= 1);
      setModelData([])
  }

  useEffect(() => {
    const timeId = setInterval(() => {
      // After 3 seconds set the show value to false
      setModelData((prv)=>{return[...prv, "a"]})
    }, 3000)
   
    return () => {
      clearInterval(timeId)
    }
  },[])
  
  return (
    
    <div className="App">
      {modelData.length >= 1 && <Modal show={ displayForm } onHide={handleClose} dialogClassName="modal-90w"
      aria-labelledby="example-custom-modal-styling-title" >
          <Modal.Header closeButton>
          <Modal.Title>Edit Contry Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Hello World!!
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
              Close
          </Button>
          </Modal.Footer>
      </Modal>}
      <Header/>
      {/* <Link to="/">
        <h1 className='text-center'>Countries</h1>
      </Link> */}
      {loading && <LinearProgress/> }
      <Routes>
        <Route path='/' element={<L1Assignment/>} />
        <Route path='/L2Assignment' element={<DisplayData/>} />
        <Route path='/Assignment2' element={<EmpList/>} />
        <Route path='/Assignment3' element={<Contact/>} />
        <Route path="/Assignment4" element={<Home />} />
        <Route path="/name/:name" element={<SingleCountry />} />
        <Route path='/thankyou' element={ <ThankYou />} />
        <Route path='/muitable' element={ <MuiTable />} />
      </Routes>

    </div>
  );
}

export default App;
