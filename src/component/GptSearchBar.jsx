import React, {  useRef } from 'react';
import BackgroundImg from "../assets/images/Background.jpg";
import { useDispatch, useSelector } from 'react-redux';
import openai from "../utils/openai";
import lang from '../utils/languageConstant';
import { API_OPTIONS } from '../utils/constant';
import { addGptMovieResult } from '../features/gptSlice';
import GptMovieSuggestion from './GptMovieSuggestion';

function GptSearchBar() {
    const langKey = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (searchText.current) {
    //         console.log("searchText.current ==> ", searchText.current);
    //         console.log("searchText.current.value ==> ", searchText.current.value);
    //     }
    // }, []);

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            'https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1',
            API_OPTIONS
        );
        const json = await data.json();
        return json.results;
    };

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleGptSearchClick(e);
        }
    }

    async function handleGptSearchClick(e) {
        try {
            if (e) e.preventDefault();

            const gptQuery =
                "Act as a movie recommendation system and suggest some movies from this query: " +
                searchText.current.value +
                " only give me names of 5 movies , comma separated like the example result given ahead. Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gya";

            const gptResults = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [{ role: "user", content: gptQuery }],
                max_tokens: 200,
                temperature: 0.7,
            });

            const gptMovies = gptResults?.choices[0]?.message?.content.split(",");
            const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie.trim()));
            const tmdbResult = await Promise.all(promiseArray);

            dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResult }));
            // console.log("GPT Movies:", gptMovies);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <section
            className="h-screen w-full bg-cover relative flex items-center justify-center"
            style={{ backgroundImage: `url(${BackgroundImg})` }}
        >
            {/* Dark overlay */}
            <div className="bg-black inset-0 absolute opacity-65 h-full w-screen"></div>

            {/* Content */}
            <div className="pt-40 m-auto flex  md:w-10/12 flex-col absolute h-full">
                {/* Search Bar */}
                <form className="flex md:flex-row flex-col mb-6 pt-20 md:pt-0 mx-0 md:mx-auto  items-center gap-2">
                    <input
                        type="text"
                        placeholder={lang[langKey].gptSearchPlaceholder}
                        ref={searchText}
                        onKeyDown={handleKeyDown}
                        className="px-4 py-2 w-96 mx-auto bg-white border border-white rounded-lg"
                    />
                    <button
                        className="py-2 px-0 w-20 bg-blue-400 rounded-lg"
                        type="button"
                        onClick={handleGptSearchClick}
                    >
                        {lang[langKey].search}
                    </button>
                </form>

                {/* Results Section */}
                <div className="flex-1 w-full overflow-y-auto px-4 pb-10 scrollbar-hide">
                    <GptMovieSuggestion />
                </div>
            </div>
        </section>
    );
}

export default GptSearchBar;
