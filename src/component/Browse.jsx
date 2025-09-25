import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { API_OPTIONS } from '../utils/constant'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
      Browse
    </div>
  )
}

export default Browse