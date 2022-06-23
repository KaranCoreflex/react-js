import React from 'react'
import { Link,NavLink } from "react-router-dom";
import "../Header/header.css"

export const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg pt-3 pb-3 nav-bg-color">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            
            
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to='/'
                        style={({isActive})=>{{return{backgroundColor: isActive ? '#ffff' : '',color: isActive ? '#00a0d7' : '#ffff'}}}}>L1-Assignment</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to='/L2Assignment'
                        style={({isActive})=>{{return{backgroundColor: isActive ? '#ffff' : '',color: isActive ? '#00a0d7' : '#ffff'}}}}>L2-Assignment</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to='/Assignment2'
                        style={({isActive})=>{{return{backgroundColor: isActive ? '#ffff' : ''}}}}>Assignment 2</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to='/Assignment3'
                        style={({isActive})=>{{return{backgroundColor: isActive ? '#ffff' : ''}}}}>Assignment 3</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to='/Assignment4'
                        style={({isActive})=>{{return{backgroundColor: isActive ? '#ffff' : ''}}}}>Assignment 4</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to='/muitable'
                        style={({isActive})=>{{return{backgroundColor: isActive ? '#ffff' : ''}}}}>MuiTable</NavLink>
                </li>

                    {/* <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" to='/'
                        style={({isActive})=>{{return{backgroundColor: isActive ? '#ffff' : ''}}}}
                        >Contact</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to='/countrie'
                    style={({isActive})=>{{return{backgroundColor: isActive ? '#ffff' : ''}}}}
                    >Countrie</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link " to='/emplist'
                    style={({isActive})=>{{return{backgroundColor: isActive ? '#ffff' : ''}}}}
                    >Emp List</NavLink>
                    </li> */}
                
            </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}
