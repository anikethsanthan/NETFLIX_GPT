import React from 'react'
import lang from '../utils/languageConstants'
import {useSelector } from 'react-redux'
import { chageLanguage } from '../utils/configSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { useDispatch } from 'react-redux';

const GptSearchBar = () => {
    const dispatch=useDispatch();
    const langKey=useSelector((store)=>store.config.lang)
    const handleLanguageCHange=(e)=>{
        dispatch(chageLanguage(e.target.value))
      }
  return (
    <div>
     <form className='p-6 pt-[10%] grid grid-cols-12'>
     <select onChange={handleLanguageCHange}
          className='p-1 m-3 col-span-1 bg-gray-900 text-white  rounded-lg ' >
            {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>)}
          </select>
        <input  className="p-4 m-4 col-span-8 border-4 border-indigo-500/75" 
        type="text" 
        placeholder={lang[langKey].gptSearchPlaceholder}></input>    
        <button 
        className="p-4 m-4 col-span-3 ml-2
         bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          text-white rounded-lg " >
             {lang[langKey].search}
             </button>
       
     </form>
    </div>
  )
}

export default GptSearchBar
