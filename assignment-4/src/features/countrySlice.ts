import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { countryList, SingleCountryType } from "../types/countryList";

// for all country
export const getCountry = createAsyncThunk("country/getCountry", async()=>{
    return fetch("https://restcountries.com/v3.1/all").then((res)=>
        res.json().then(data=>data)
    );
});

// for single country
export const getSingleCountry = createAsyncThunk("country/getSingleCountry", async(name:string| undefined)=>{
    return fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`).then((res)=>
        res.json().then(data=>data[0])
    );
});

// for border country // i'll continue on monday
export const getBorderCountry = createAsyncThunk("country/getBorderCountry", async(name:string)=>{
    return fetch(`https://restcountries.com/v3.1/alpha/${name}`).then((res)=>
        res.json().then(data=>data[0])
    );
});

const initialState = {
    country:<countryList[]>[],
    singleCountry:<SingleCountryType>{},
    loading: false

}

export const countrySlice = createSlice({
    name:"country",
    initialState,
    reducers:{},
    extraReducers:{
        [getCountry.pending.type]: (state) => {
            state.loading = true;
        },
        [getCountry.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.country = action.payload
        },
        [getCountry.rejected.type]: (state) => {
            state.loading = false;
        },
        
        // for sigle country
        [getSingleCountry.pending.type]: (state) => {
            state.loading = true;
        },
        [getSingleCountry.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.singleCountry = action.payload
        },
        [getSingleCountry.rejected.type]: (state) => { 
            state.loading = false;
           
        },
        
        // for sigle country
        [getBorderCountry.pending.type]: (state) => {
            state.loading = true;
        },
        [getBorderCountry.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.singleCountry = action.payload
        },
        [getBorderCountry.rejected.type]: (state) => {
            state.loading = false;
        },
    }
});

export const selectCountry = (state:RootState) => state.country;
// export const {add} = countrySlice.actions;
export default countrySlice.reducer;