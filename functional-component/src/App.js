import './App.css';
import Hooks from './component/Hooks';
import React, { useState } from 'react'
import Header from './component/Header';
import Footer from './component/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home'

function App() {

  const [counter, setCounter] = useState(12);
  console.log(counter);

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Hooks />}> </Route>
        <Route path='/home' element={<Home />}> </Route>
        
        <Route path='*' element={<h1>Page Not Found !!!!</h1>}> </Route>
      </Routes>
    </BrowserRouter>
    {/* <div className="App container mt-4 mb-4">
      
      <h1>hello I'm Counter</h1>
      <Hooks counter={counter} />
      
    </div> */}
    <Footer/>
    </>
  );
}

export default App;
