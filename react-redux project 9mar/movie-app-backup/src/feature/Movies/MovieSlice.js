import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from '../../common/apis/MovieApiKey';


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term)=> {
    // const MovieText = "harry";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
      // console.log("The response from API", response)
    return response.data;
})

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async (term)=> {
    // const seriesText = "Friends";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
      // console.log("The response from API", response)
    return response.data;
})

export const fetchAsyncShowsDetails = createAsyncThunk('shows/fetchAsyncShowsDetails', async (id)=> {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
      // console.log("The response from API", response)
    return response.data;
})

const initialState = {
    movies: {},
    shows: {},
    selectedMovieorShows: {}
}

const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{
        // addMovies:(state, {payload}) => {
        //     state.movies = payload;
        // },
        removeSelectedMovieorshows: (state) => {
            state.selectedMovieorShows = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]: (state,action) => {
            console.log("Fetch successfully")
            return { ...state, movies: action.payload}
        },
        [fetchAsyncMovies.rejected]: (state,{payload}) => {
            console.log("rejected")
        },
        [fetchAsyncShows.fulfilled]: (state,{payload}) => {
            console.log("Fetch successfully")
            return { ...state, shows: payload}
        },
        [fetchAsyncShowsDetails.fulfilled]: (state,{payload}) => {
            console.log("Fetch successfully")
            return { ...state, selectedMovieorShows: payload}
        },
    }
})

export const { removeSelectedMovieorshows } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieorShow = (state) => state.movies.selectedMovieorShows
export default movieSlice.reducer;