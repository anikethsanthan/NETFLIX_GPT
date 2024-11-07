import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies)
  return (
    <div className='-mt-64 relative  z-20'>
      <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top-Rated Movies"} movies={movies.topRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
    </div>
  )
}

export default SecondaryContainer