import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../features/movieSlice";

function useTopRatedMovies() {
    const dispatch = useDispatch()
    useEffect(() => {
        const getTopRatedMovies = async () => {
            const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
            const json = await data.json()
            // console.log(" ==>>", json.results);
            if (json.results)
                dispatch(addTopRatedMovies(json.results));
        }
        getTopRatedMovies()

    }, [])
}

export default useTopRatedMovies