import React from 'react'
import MovieCard from './MovieCard';

function MovieList({ title, movies }) {
  // console.log(movies[0]?.poster_path);
  // console.log("Moviews in ...ishoihs",movies);
  return (
    <div className='px-6 '>
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div className='w-full flex overflow-x-scroll pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
        <div className='flex gap-5'>
          {movies && movies.map((movie) =>
            <MovieCard key={movie.id} movies={movie} />
          )}
        </div>
      </div>
    </div>
  )
}
export default MovieList