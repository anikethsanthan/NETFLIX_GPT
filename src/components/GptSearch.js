import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
        <img src="./SearchBack1.jpg" alt="BackgroundImg" className='h-screen w-screen'></img>
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
