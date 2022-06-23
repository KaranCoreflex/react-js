import React from 'react'

function Assigment5() {
  return (
    <div>
        <a className='details-overlay' href='https://assignment4-counrties.netlify.app' target="_blank">
            <div className='assignment-img'>
                <img className="custom-img" src='\images\assignmant5.jpg' />
            </div>
            <div className='overlay'></div>
            <div className='details-assignment'>
            <h3>Assignment 4</h3>
                <h4>Load countries using redux and Edit country</h4>
                <p>Fetched the data from countries rest api using axios and useEffect hook and displayed the list of countries in the homepage.</p>
            </div>
        </a>
        <h3 className='mt-2'>Assignment 4</h3>
    </div>
  )
}

export default Assigment5