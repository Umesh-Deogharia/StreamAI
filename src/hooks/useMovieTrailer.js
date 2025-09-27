import React, { useEffect } from 'react'
import { addtrailerVideo } from '../features/movieSlice';
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';

function useMovieTrailer(movieId) {
    //fetching the trailer video of the movie and updating the store with trailer video data
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        const filterData = json?.results?.filter(element => element.type == "Trailer");
        const trailer = filterData.length ? filterData[0] : json?.results[0]
        // console.log(trailer);
        dispatch(addtrailerVideo(trailer))
    }
    useEffect(() => {
        getMovieVideos()
    }, [])
    // console.log("trailerVideo",trailerVideo);
}
export default useMovieTrailer