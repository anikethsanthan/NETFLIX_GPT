import { API_Options, topRatedMovies } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';
import { useEffect } from 'react'


const useTopRatedMovies=()=>{
    const dispatch =useDispatch();
    const nowPlayingMovies=useSelector((store)=>store.movies.topRatedMovies);
  const getTopRatedMovies=async()=>{
    const data =await  fetch( topRatedMovies,API_Options);
    const json=await data.json();
    dispatch(addTopRatedMovies(json.results));
  }

  useEffect(()=>{
    if(!nowPlayingMovies)
    getTopRatedMovies();
  },[]);
}
export default useTopRatedMovies;