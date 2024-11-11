import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const gpt=useSelector((store)=>store.gpt);
  const apiKey = useSelector((store) => store.gpt.apiKey);
  const{movieResults,movieNames}=gpt;

  if(!movieNames || !apiKey) return null;
  return (
    <div className= 'p-4 m-4 bg-black bg-opacity-60 text-white rounded-lg'>
      {movieNames.map((movie,index)=>
      <MovieList 
       key={movie}
        title={movie}
         movies={movieResults[index]}/>)}
      
    </div>
  )
}

export default GptMovieSuggestions
