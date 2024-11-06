import {configureStore} from "@reduxjs/toolkit";
import  userReducer  from "react";
import moviesReducer from "./movieSlice";

//./moviesSlice

const appStore=configureStore({
    reducer :{
        users : userReducer,
        movies: moviesReducer,
    }
}

)

export default appStore;