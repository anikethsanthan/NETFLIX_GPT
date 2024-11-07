import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
        <img src="./Background_Img.jpg" alt="BackgroundImg"></img>
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
