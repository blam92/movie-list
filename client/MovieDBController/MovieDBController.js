import API_KEY from '../config';
import $ from 'jquery';
const DB_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const IMG_URL = 'http://image.tmdb.org/t/p/w185/'


let MovieDB = {
  get(movie, callback) {
    $.get(DB_URL + movie, function(data) {
      let movieData = data.results[0];
      console.log(movieData);
      let movie = {name: movieData.original_title, text: movieData.overview, imgSource: IMG_URL + movieData.poster_path, toWatch: false, id: movieData.id};
      callback(movie);
    });
  }
}


export default MovieDB;