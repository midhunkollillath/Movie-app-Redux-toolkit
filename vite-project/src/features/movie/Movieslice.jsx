import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import MovieApi from "../../common/api/Movieapi";
const movieText="Harry"
export const FetchAsyncMovies = createAsyncThunk('movies/fetchasyncmovie',async()=>{
    const response=await MovieApi.get(`?apiKey=${'2f44afe'}&s=${movieText}&type=movie`)
   return response.data
})
export const FetchAsyncShows = createAsyncThunk('movies/fetchasyncShow',async()=>{
    const seriesText = 'marvel'
    const response=await MovieApi.get(`?apiKey=${'2f44afe'}&s=${seriesText}&type=series`)
   return response.data
})
export const FetchAsyncmovieshowDetails = createAsyncThunk('movies/FetchAsyncmovieshowDetails',async(id)=>{
    console.log(id)
    const response=await MovieApi.get(`?apiKey=${'2f44afe'}&i=${id}&Plot=full`)
    console.log(response,'respo data')
   return response.data
})

const initialState={
    movie:{},
    shows:{},
    details:{},
};
 const movieSlice= createSlice({
    name:'movies',
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
          state.selectMovieOrShow = {};
        },
      },
    extraReducers:{
        [FetchAsyncMovies.pending]:()=>{
            console.log('pending')
        },
        [FetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log('fetch succesful',state,payload)
            return {...state,movie:payload}
        },
        [FetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log('fetch succesful shows',state,payload)
            return {...state,shows:payload}
        },
        
        [FetchAsyncMovies.rejected]:()=>{
            console.log('rejected')
        },
        [FetchAsyncmovieshowDetails.fulfilled]:(state,{payload})=>{
            console.log('fetch succesful details',payload)
            return {...state,details:payload}
        },
    }
})

export const {removeSelectedMovieOrShow} =movieSlice.actions;
export const getAllmovies =(state)=>state.movies.movie;
export const getAllshow =(state)=>state.movies.shows;
export const Details =(state)=>state.movies.details;
export default movieSlice.reducer;