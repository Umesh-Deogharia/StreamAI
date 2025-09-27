import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { API_OPTIONS } from '../utils/constant'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies '
import useTopRatedMovies from '../hooks/useTopRatedMovies '
import useUpcomingMovies from '../hooks/useUpcomingMovies '
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
    </div>
  )
}

export default Browse