import React, { useState, useEffect } from 'react'
import App from '../App'

function Hooks(props) {

    const [counter, setCounter] = useState(10);
    

    const [MultibyTwo, setMultibyTwo] = useState(0);

    useEffect(()=>{
        const value = counter * 2
         setMultibyTwo(value);
         console.log(value);
    },[counter])

    

    const click = () => {
        setCounter(counter+1)
    }

    const clear = () => {
        setCounter(0);
    }
    return (
        <div className='container mt-4 mb-4'>
           <h3>count is {counter}</h3>
           <h3>I'm props {props.counter}</h3>
           <h3>Multiplye by 2:-  {MultibyTwo}</h3>
           <button className='btn btn-primary' onClick={()=>{click()}}> click </button>
           <button className='btn btn-danger ' onClick={()=>{clear()}}> clear </button>
        </div>
    )
}

export default Hooks;