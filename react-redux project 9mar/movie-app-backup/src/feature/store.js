import { configureStore } from "@reduxjs/toolkit"
import moviesReducer from "../feature/Movies/MovieSlice"

export const store = configureStore({
    reducer: {
        movies: moviesReducer
    },
});