import React,{ useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../features/movieSlice";


function useNowPlayingMovies() {
    const dispatch = useDispatch()
    useEffect(() => {
        const getNowPlayingMovies = async () => {
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
            const json = await data.json()
            // console.log(" ==>>", json.results);
            if(json.results)
            dispatch(addNowPlayingMovies(json.results));
        }
        getNowPlayingMovies()

    }, [])
}

export default useNowPlayingMovies