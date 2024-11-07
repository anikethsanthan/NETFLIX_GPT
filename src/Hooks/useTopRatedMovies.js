import { API_Options, topRatedMovies } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';
import { useEffect } from 'react'


const useTopRatedMovies=()=>{
    const dispatch =useDispatch();
  const getTopRatedMovies=async()=>{
    const data =await  fetch( topRatedMovies,API_Options);
    const json=await data.json();
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(()=>{
    getTopRatedMovies();
  },[]);
}
export default useTopRatedMovies;