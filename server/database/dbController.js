var db = require('./dbConnection');
var Promise = require('bluebird');

exports.getMoviesFromDB = () => {

  return db.Movie.sync().then(() => db.Movie.findAll());
};

exports.saveMovieInDB = (movie) => {
  return db.Movie.create({
    id: movie.id,
    title: movie.name,
    description: movie.text,
    img_source: movie.imgSource,
    to_watch: movie.toWatch
  });
}

exports.updateMovie = (movie) => {

  return db.Movie.update({
    to_watch: movie.toWatch
  }, {
    where: {
      id: movie.id
    }
  });
};