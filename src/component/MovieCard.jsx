import React from 'react'
import { IMG_CDN_URL } from '../utils/constant';

function MovieCard({ movies }) {
  // console.log(movies);
  return (
    <div className='w-40'>
      {/* {movies.forEach(element => 
            
            )} */}

      {/* <div className='bg-red-500 p-10 m-10'>
              Umesh
            </div> */}
      {/* <h1>{movies.title }</h1> */}
      {<img className='w-40' src={IMG_CDN_URL + movies.poster_path} alt="movie-poster" />}
    </div>
  )
}

export default MovieCard