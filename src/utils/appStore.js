import {configureStore} from "@reduxjs/toolkit";
import  userReducer  from "react";
import moviesReducer from "./movieSlice";
import gptReducer from "./gptSlice"
import configReducer from"./configSlice";


//./moviesSlice

const appStore=configureStore({
    reducer :{
        users : userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config:configReducer,

    }
}

)

export default appStore;