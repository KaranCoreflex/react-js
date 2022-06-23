import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../feature/Movies/MovieSlice'
import MovieCard from "../MovieCard/MovieCard"
import Header from "../Header/Header"
import "./MovieListing.scss"
import Slider from 'react-slick'
import {settings} from "../../common/settings"

function MovieListing() {

 
  const Movies = useSelector(getAllMovies);
  const Shows = useSelector(getAllShows);
  console.log("movies",Movies);
  let renderMoives, renderShows = ""

  renderMoives = Movies.Response === 'True' ? (
    Movies.Search.map((movie, index) =>(
      <MovieCard key={index} data={movie} />
    ))
  ) : (<div className='movies-error'><h3>{Movies.error}</h3></div>)
  
  renderShows = Shows.Response === 'True' ? (
    Shows.Search.map((Shows, index) =>(
      <MovieCard key={index} data={Shows} />
    ))
  ) : (<div className='movies-error'><h3>{Shows.error}</h3></div>)





  return (
    <div>
      <div className='movie-wrapper'>
        <div className='movie-list'>
          <h2>Movies</h2>
          <div className='movie-container'>
            <Slider {...settings} >
              {renderMoives}
            </Slider>
          </div>
        </div>
        <div className='show-list'>
          <h2>Shows</h2>
          <div className='movie-container'>
            <Slider {...settings} >
              {renderShows}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieListing