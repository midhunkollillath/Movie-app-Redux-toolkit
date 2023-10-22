import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movie:{},
};
 const movieSlice= createSlice({
    name:'movies',
    initialState,
    reducers:{
        addmovies:(state,{payload})=>{
            state.movie =payload
        }
    }
})

export const {addmovies} =movieSlice.actions;
export const getAllmovies =(state)=>state.movies.movie;
export default movieSlice.reducer;