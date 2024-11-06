import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-44 m-3 hover:scale-125'>
      <img alt="NowplayingCard" src={IMG_CDN+posterPath}></img>
    </div>
  )
}

export default MovieCard
