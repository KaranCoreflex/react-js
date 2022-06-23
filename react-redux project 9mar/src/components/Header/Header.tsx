import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchAsyncMovies, fetchAsyncShows } from '../../feature/Movies/MovieSlice';

import "./header.scss";

function Header() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
      if(term === "") return alert("Please Enter the Show or Movie")
      e.preventDefault();
     
      dispatch(fetchAsyncMovies(term));
     
      dispatch(fetchAsyncShows(term));
      setTerm("");
  }

  return (
    <div className="header">
      <div className="logo"> <Link to="/">Movie App</Link></div>
      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input type='text' value={term} placeholder='Search Movie or Shows' onChange={(e)=>setTerm(e.target.value)} />
          <button type='submit'><i className='fa fa-search'></i></button>
        </form>
      </div>
      <div className="user-image">
        <img src="/images/user.png" alt="user" />
      </div>
    </div>
  )
}

export default Header