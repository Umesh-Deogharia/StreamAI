import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovies } from "../features/movieSlice";


function useUpcomingMovies() {
    const dispatch = useDispatch();
    const upComingMovies = useSelector(store => store.movies.upComingMovies);
    useEffect(() => {
        const getUpcomingMovies = async () => {
            const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
            const json = await data.json()
            // console.log(" ==>>", json.results);
            if (json.results)
                dispatch(addUpcomingMovies(json.results));
        }
        !upComingMovies && getUpcomingMovies()

    }, [])
}

export default useUpcomingMovies