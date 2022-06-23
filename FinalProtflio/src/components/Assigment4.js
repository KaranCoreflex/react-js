import React from 'react'

function Assigment4() {
  return (
    <div>
        <a className='details-overlay' href='https://l1-assignment.herokuapp.com/' target="_blank">
            <div className='assignment-img'>
                <img className="custom-img" src='\images\assignmant4.jpg' />
            </div>
            <div className='overlay'></div>
            <div className='details-assignment'>
               <h3>Assignment 3</h3>
                <h4>Validate Name, Email, Phone in contact page And show filled data on thank you page</h4>
                <p>Craeted name, email, phone no fields, Used useState Hooks, Used regulare expression for email validation, Used useLocation and useNavigate</p>
            </div>
        </a>
        <h3 className='mt-2'>Assignment 3</h3>
    </div>
  )
}

export default Assigment4