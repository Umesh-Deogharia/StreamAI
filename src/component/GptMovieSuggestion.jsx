import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from "../component/MovieList";

function GptMovieSuggestion() {
  const { movieResults, movieNames } = useSelector(store => store.gpt);
  // console.log("movieResults==>>>>>", movieResults[0]);
  // console.log("movieNames==>>>>", movieNames[0]);
  if (!movieNames || movieResults.length == 0) return null;

  return (
    <div className='p-3 m-3 relative '>
      {movieNames.map((movieName, index) => {
        return <MovieList title={movieName} movies={movieResults[index]} />
      })}
    </div>
  )
}
export default GptMovieSuggestion