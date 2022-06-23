import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing"
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../feature/Movies/MovieSlice';


function Home() {

  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText))
  },[dispatch]);




  return (
    <>
      <div className='banner-img'></div>
      <MovieListing />
    </>
  )
}

export default Home