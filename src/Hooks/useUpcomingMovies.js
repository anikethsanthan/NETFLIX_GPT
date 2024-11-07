import { API_Options, upcomingMOvies } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addupcomingMovies } from '../utils/movieSlice';
import { useEffect } from 'react'


const useUpcomingMovies=()=>{
    const dispatch =useDispatch();
  const getupcomingMovies=async()=>{
    const data =await  fetch(upcomingMOvies,API_Options);
    const json=await data.json();
    dispatch(addupcomingMovies(json.results));
  }

  useEffect(()=>{
    getupcomingMovies();
  },[]);
}
export default useUpcomingMovies;