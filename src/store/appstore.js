import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';
import moviesReducer from "../features/movieSlice"
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies : moviesReducer
    },
});
export default appStore;