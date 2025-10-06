import React, { useEffect, useRef } from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies = [] }) {
  const scrollRef = useRef(null);
  const isOverPosterRef = useRef(false);

  // ✅ Check if any movie has a poster
  // const hasPoster = movies.some((movie) => movie.poster_path);

  // console.log("movieName i did for", movies)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Update flag when pointer moves/enters/leaves inside the scroll container
    const handlePointerMove = (e) => {
      isOverPosterRef.current = !!e.target.closest(".movie-card");
    };

    const handlePointerOver = (e) => {
      if (e.target.closest(".movie-card")) isOverPosterRef.current = true;
    };

    const handlePointerOut = (e) => {
      // if pointer left a poster and did not enter another poster, mark false
      const to = e.relatedTarget;
      const stillOver = to && to.closest && to.closest(".movie-card");
      if (!stillOver) isOverPosterRef.current = false;
    };

    // Wheel handler on window so we can prevent default page scroll when needed.
    const handleWheel = (e) => {
      if (!el) return;
      // Only block vertical scrolling and convert to horizontal when pointer is over a poster
      if (isOverPosterRef.current) {
        e.preventDefault(); // stop page vertical scroll
        el.scrollLeft += e.deltaY; // translate vertical wheel to horizontal scroll
      }
      // else: don't preventDefault -> allow normal vertical scrolling
    };

    // Attach listeners
    el.addEventListener("pointermove", handlePointerMove);
    el.addEventListener("pointerover", handlePointerOver);
    el.addEventListener("pointerout", handlePointerOut);
    // use window so the wheel event can be prevented even when the browser wouldn't bubble it to el
    window.addEventListener("wheel", handleWheel, { passive: false });

    // cleanup
    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerover", handlePointerOver);
      el.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="px-6">
      {/* {hasPoster && (
        <h1 className="text-3xl py-4 text-white">{title}</h1>
      )} */}
      
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>

      <div
        ref={scrollRef}
        className="w-full flex pt-2 overflow-x-auto whitespace-nowrap
          [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex gap-5  items-start">
          {(movies ?? []).map((movie) => (
            // wrapper ensures we always have a .movie-card element to detect hover
            <div
              key={movie.id || movie.title}
              className="movie-card inline-block"
              style={{ display: "inline-block" }}
            >
              {/* keep the prop name your MovieCard expects; if it expects `movies`, pass `movies={movie}` */}
              <MovieCard movies={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
