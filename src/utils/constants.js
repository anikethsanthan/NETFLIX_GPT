 export const API_Options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTgxYjhhMjc0NTlhYTc1MjY4NWU0OTM0NWM1YTYyMSIsIm5iZiI6MTczMDg4NDA1Ni43MDkzMjEzLCJzdWIiOiI2NzJiMmVkMDc5NjdlMDYxMTBlY2MwYzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2eF4HBWjWGXI3LscKl_R3zcOyr93naCMnyg5XZHOHmA'
    }
  }; 

  export const IMG_CDN="https://image.tmdb.org/t/p/w780";
  export const popularMovies='https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  export const upcomingMOvies='https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
  export const topRatedMovies='https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';


  export const SUPPORTED_LANGUAGES=[
    {identifier:"english" , name: "English"},
    {identifier:"hindi" , name: "Hindi"},]