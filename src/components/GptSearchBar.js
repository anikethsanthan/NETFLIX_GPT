import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import {useSelector } from 'react-redux'
import { chageLanguage } from '../utils/configSlice';
import { API_Options, SUPPORTED_LANGUAGES } from '../utils/constants';
import { useDispatch } from 'react-redux';
import openai from"../utils/openAi";
import { addGptMovieResult } from '../utils/gptSlice';




const GptSearchBar = () => {
    const dispatch=useDispatch();
    const langKey=useSelector((store)=>store.config.lang)
    const handleLanguageCHange=(e)=>{
        dispatch(chageLanguage(e.target.value))
      };

    const searchText=useRef(null);

    const searchMovieTMDB= async(movie)=>{
        const data =await fetch('https://api.themoviedb.org/3/search/movie?query='
            +movie+
            '&include_adult=false&language=en-US&page=1', API_Options);
            
        const json=await data.json();
        console.log("ne CONSOLE"+json);
        return json.result;
    }

      const handleGPTsearchClick=async()=>{
       console.log(searchText.current.value);
       
       const searchQuery="Act as a movie recommendation system and search movies for the query: "
       +searchText.current.value+
       "only give me names of 5 movies , comma seperated list like the example ahead Example: ramesh, sukesh, naresh, rajesh, mukesh";
       const GPTResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: searchQuery }],
        model: 'gpt-3.5-turbo',

        
      })
       
      console.log(GPTResults.choices);

      const gptMovies=GPTResults.choices?.[0]?.message?.content.split(", ");

      

      const promiseArray= gptMovies.map((movie)=>searchMovieTMDB(movie));
      console.log("PromiseARRAY"+promiseArray)

      const tmdbResults= await Promise.all(promiseArray);
      

      dispatch(addGptMovieResult({movieNames: gptMovies, movieResults :tmdbResults})); 


      
    }

      

  return (
    <div>
     <form 
     className='p-6 pt-[10%] grid grid-cols-12' 
     onSubmit={(e)=> e.preventDefault()}>
     <select onChange={handleLanguageCHange}
          className='p-1 m-3 col-span-1 bg-gray-900 text-white  rounded-lg ' >
            {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>)}
          </select>

        <input  
        ref={searchText}
        className="p-4 m-4 col-span-8 border-4 border-indigo-500/75" 
        type="text" 
        placeholder={lang[langKey].gptSearchPlaceholder}></input>    
        <button 
        className="p-4 m-4 col-span-3 ml-2
         bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          text-white rounded-lg " onClick={handleGPTsearchClick} >
             {lang[langKey].search}
             </button>
       
     </form>
    </div>
  )
}

export default GptSearchBar
