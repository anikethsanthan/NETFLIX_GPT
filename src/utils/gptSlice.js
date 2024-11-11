import { createSlice } from "@reduxjs/toolkit";


const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch: false,
        movieResults:null,
        movieNames:null,
        apiKey:null
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResult:(state,action)=>{
            const{movieNames, movieResults}=action.payload;
            state.movieNames=movieNames;
            state.movieResults=movieResults;

        },
        addApiKey:(state,action)=>{
            state.apiKey= action.payload;
        },
        removeApiKey:(state)=>{
            state.apiKey= null;
      },

    }


})
export const{toggleGptSearchView , addGptMovieResult, addApiKey,removeApiKey }=gptSlice.actions;
export default gptSlice.reducer;