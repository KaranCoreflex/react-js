import React from 'react'
import { useLocation } from 'react-router-dom'


function ThankYou() {
  
    const {state} = useLocation()  
    console.log(state)

    return (
        <div>
           <h1> {state.username} </h1>
           <h1> {state.email} </h1>
           <h1> {state.phoneno} </h1>
        </div>
    )
}

export default ThankYou