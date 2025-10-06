import Footer from './Footer'
import Header from './Header'
import { RiRobot2Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { API_OPTIONS } from '../utils/constant'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies '
import useTopRatedMovies from '../hooks/useTopRatedMovies '
import useUpcomingMovies from '../hooks/useUpcomingMovies '
import GptSearch from './GptSearch'
import { useDispatch, useSelector } from 'react-redux'
import { toggleGptSearchView } from '../features/gptSlice';

const Browse = () => {

  const dispatch = useDispatch()

  const gptSearchshow = useSelector(store => store.gpt.showGptSearch)
  function handleGptSearchClick() {
    // console.log("gptSearchshow",gptSearchshow);
    dispatch(toggleGptSearchView());
    // console.log("gptSearchshow2nd",gptSearchshow);
  }
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <button className='px-4 py-2 rounded-lg bg-red-500 text-white fixed bottom-8 right-4 z-50' onClick={handleGptSearchClick}>{gptSearchshow ? <FaHome /> : <RiRobot2Fill />}</button>
      {showGptSearch ? <GptSearch /> : <> <MainContainer /> <SecondaryContainer /> </>}
    </div>
  )
}

export default Browse