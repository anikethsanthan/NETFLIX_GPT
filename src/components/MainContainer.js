import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from "./VideoTitle";
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies =useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;

    function getRandomNumber() {
        return Math.floor(Math.random() * movies.length);
      }
    const mainMovie=movies[getRandomNumber()];

    const {original_title, overview, id} = mainMovie
    
  return (
    <div className='  bg-black pt-[23%] md:pt-0'>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;
