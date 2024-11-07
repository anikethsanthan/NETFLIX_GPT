import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useupcomingMovies from '../Hooks/useUpcomingMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


const Browse = () => {
const showGpt=useSelector((store)=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useupcomingMovies();
  useTopRatedMovies();
  
  return (
    <div >
      <Header/>
      {!showGpt? <GptSearch/> : <>
        <MainContainer/>
        <SecondaryContainer/>

      </>}
      
      
    </div>
  )
}

export default Browse
