import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

function MainContainer() {
    const movies = useSelector(store => store?.movies?.nowPlayingMovies)
  if (!movies) return;
  const mainMovie = movies[1];
  // console.log("movies", mainMovie);
  const { title, overview,id } = mainMovie;

  // console.log(title);
  // console.log(overview);

  // console.log(title,overview);
  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer