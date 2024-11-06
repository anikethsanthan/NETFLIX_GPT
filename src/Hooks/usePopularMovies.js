import { API_Options, popularMovies } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { useEffect } from 'react'


const usePopularMovies=()=>{
    const dispatch =useDispatch();
  const getPopularMovies=async()=>{
   
    const data =await  fetch(popularMovies,API_Options);
    const json=await data.json();
    dispatch(addPopularMovies(json.results));
  }

  useEffect(()=>{
    getPopularMovies();
  },[]);
}
export default usePopularMovies;