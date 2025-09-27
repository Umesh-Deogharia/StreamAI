import React from 'react'
import MovieList from './MovieList.jsx'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const movies = useSelector(store => store.movies.nowPlayingMovies);
  const popularMovies = useSelector(store => store.movies.popularMovies);
  const topRatedMovies = useSelector(store => store.movies.topRatedMovies);
  const upcomingMovies = useSelector(store => store.movies.upComingMovies);

  return (
    <div className='bg-black'>
      <div className='-mt-55 relative z-20 pl-15'>
        {movies && <MovieList title={"Now Playing"} movies={movies} />}
        {movies && <MovieList title={"Popular Movies"} movies={popularMovies} />}
        {movies && <MovieList title={"Top Rated Movies"} movies={topRatedMovies} />}
        {movies && <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />}
        {movies && <MovieList title={"Trending Movies"} movies={movies} />}
        {movies && <MovieList title={"Horror Movies"} movies={movies} />}
        {movies && <MovieList title={"Comedy Movies"} movies={movies} />}
      </div>
    </div>
  )
}

export default SecondaryContainer