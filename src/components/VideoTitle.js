import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-72 px-10 absolute bg-gradient-to-r from-black w-screen aspect-video'>
         <h1 className='text-4xl font-extrabold pb-3 text-white '>{title}</h1>
         <p className='w-2/4 font-serif ... pb-3 text-white'>{overview}</p>
        <div >
          <button 
          className='bg-white text-black w-52 h-10 mr-6 text-center rounded-xl hover:bg-opacity-50 '>
            ▶️  Play</button>
          <button 
          className='bg-gray-400 text-black w-52 h-10 mr-6 text-center rounded-xl bg-opacity-100 hover:bg-opacity-50'>
            ⓘ MoreInfo</button>
        </div>
    </div>
  )
}

export default VideoTitle
