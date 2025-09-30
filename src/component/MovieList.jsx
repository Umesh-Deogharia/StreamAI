import React, { useEffect, useRef } from 'react'
import MovieCard from './MovieCard';

function MovieList({ title, movies }) {
  // console.log(movies[0]?.poster_path);
  // console.log("Moviews in ...ishoihs",movies);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // console.log("el=>>>>>>>>>",el);

    const handleWheel = (e) => {
      if (el && el.matches(":hover")) {
        e.preventDefault(); // stop vertical page scroll
        el.scrollLeft += e.deltaY; // scroll horizontally
      }
    };

    // Attach listener with { passive: false }
    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className='px-6 '>
      <h1 className='text-3xl py-4 text-white'>{title}</h1>
      <div ref={scrollRef} className='w-full flex pt-2  overflow-x-auto
        whitespace-nowrap
        [-ms-overflow-style:none]
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
        
      '
      style={{ scrollBehavior: "smooth" }}>
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