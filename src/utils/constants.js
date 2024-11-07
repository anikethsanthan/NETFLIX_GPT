 export const API_Options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
    }
  }; 

  export const IMG_CDN="https://image.tmdb.org/t/p/w780";
  export const popularMovies='https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  export const upcomingMOvies='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
  export const topRatedMovies='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';


  export const SUPPORTED_LANGUAGES=[
    {identifier:"english" , name: "English"},
    {identifier:"hindi" , name: "Hindi"},];


    export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;

    export const searchAPI='https://api.themoviedb.org/3/search/movie?query=jigra&include_adult=false&language=en-US&page=1';