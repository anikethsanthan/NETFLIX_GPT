import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../Hooks/usePopularMovies';
import useupcomingMovies from '../Hooks/useUpcomingMovies';
import useTopRatedMovies from '../Hooks/useTopRatedMovies';


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useupcomingMovies();
  useTopRatedMovies();
  
  return (
    <div className='bg-black'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
