import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from '../../common/apis/MovieApiKey';
import { Movies ,SingleMovie} from "../../components/types/movie";
import { RootState } from "../store";


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term:string)=> {
    // const MovieText = "harry";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`)
      // console.log("The response from API", response)
    return response.data.Search;
})

export const fetchAsyncShows = createAsyncThunk('shows/fetchAsyncShows', async (term:string)=> {
    // const seriesText = "Friends";
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`)
      // console.log("The response from API", response)
    return response.data.Search;
})

export const fetchAsyncShowsDetails = createAsyncThunk('shows/fetchAsyncShowsDetails', async (id:string | undefined)=> {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
      // console.log("The response from API", response)
    return response.data;
})

const initialState = {
    movies: [{} as Movies],
    shows:  [{} as Movies],
    selectedMovieorShows:<SingleMovie>{},
}
 interface State{
    movies?:Movies[]
    shows?:Movies[]
    selectedMovieorShows?:SingleMovie
}

const movieSlice = createSlice({
    name:"movie",
    initialState,
    reducers:{
        // addMovies:(state, {payload}) => {
        //     state.movies = payload;
        // },
        removeSelectedMovieorshows: (state:State) => {
            //@ts-ignore
            state.selectedMovieorShows = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending.type]: () => {
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled.type]: (state,action) => {
            console.log("Fetch successfully")
            return { ...state, movies: action.payload}
        },
        [fetchAsyncMovies.rejected.type]: (state,{payload}) => {
            console.log("rejected")
        },
        [fetchAsyncShows.fulfilled.type]: (state,{payload}) => {
            console.log("Fetch successfully")
            return { ...state, shows: payload}
        },
        [fetchAsyncShowsDetails.fulfilled.type]: (state,{payload}) => {
            console.log("Fetch successfully")
            return { ...state, selectedMovieorShows: payload}
        },
    }
})

export const { removeSelectedMovieorshows } = movieSlice.actions
export const getAllMovies = (state:RootState) => state.movies.movies
export const getAllShows = (state:RootState) => state.movies.shows
export const getSelectedMovieorShow = (state:RootState) => state.movies.selectedMovieorShows
export default movieSlice.reducer;