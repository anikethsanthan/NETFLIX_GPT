import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
    if (!movies || movies.length === 0) {
        return null; // Render nothing if movies is null or an empty array
      }
   
  return (
    <div className=' p-6'>
         <h1 className='text-white  text-lg md:text-3xl font-extrabold  m-1 md:m-3 '>{title}</h1>
        <div className='flex overflow-x-scroll' >
           
            <div className='flex'>
                {movies.map((movie)=>(<MovieCard  key={movie.id} posterPath={movie.poster_path}/>) )}
            
            </div>
        </div>
    </div>
  )
}

export default MovieList;
