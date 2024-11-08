import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className=' w-28 md:w-44  m-1 md:m-3 hover:scale-125'>
      <img alt="NowplayingCard" src={IMG_CDN+posterPath}></img>
    </div>
  )
}

export default MovieCard
