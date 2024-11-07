import { API_Options, upcomingMOvies } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addupcomingMovies } from '../utils/movieSlice';
import { useEffect } from 'react'


const useUpcomingMovies=()=>{
    const dispatch =useDispatch();
    const nowPlayingMovies=useSelector((store)=>store.movies.upcomingMovies);
  const getupcomingMovies=async()=>{
    const data =await  fetch(upcomingMOvies,API_Options);
    const json=await data.json();
    dispatch(addupcomingMovies(json.results));
  }

  useEffect(()=>{
    if(!nowPlayingMovies)
    getupcomingMovies();
  },[]);
}
export default useUpcomingMovies;