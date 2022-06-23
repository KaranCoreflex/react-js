import React from 'react'

function Assigment3() {
  return (
    <div >
        <a className='details-overlay' href='https://l1-assignment.herokuapp.com/emplist' target="_blank">
            <div className='assignment-img'>
                <img className="custom-img" src='\images\assignmant3.jpg' />
            </div>
            <div className='overlay'></div>
            <div className='details-assignment'>
               <h3>Assignment 2</h3>
                <h4>Employee list page Using sample JSON and common Filter</h4>
                <p>Created json file and add dummy data, Featch data from json file, Display data in tabuler format</p>
            </div>
        </a>
        <h3 className='mt-2'>Assignment 2</h3>
    </div>
  )
}

export default Assigment3