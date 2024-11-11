import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar';

const GptSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
        <img src="./SearchBack1.jpg" alt="BackgroundImg" className='h-screen w-screen object-cover'></img>
      </div>
      <div className='pt-[28%] md:pt-0'>
      <GptSearchBar/>
      <GptMovieSuggestions/>
      </div>
    </div>
  )
}

export default GptSearch
