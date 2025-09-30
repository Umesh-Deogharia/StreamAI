import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
function VideoBackground({ movieId }) {
  const trailerVideo = useSelector(store => store?.movies?.trailerVideo);
  useMovieTrailer(movieId)
  return (
    <div className='w-full '>
      <iframe
        className="w-full aspect-video "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}&controls=0&modestbranding=1&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

    </div>
  )
}

export default VideoBackground;