var db = require('./dbConnection');
var Promsie = require('bluebird');

exports.getMoviesFromDB = () => {
  return new Promise((resolve, reject) => {
    let q = 'SELECT * FROM movies';
    db.connection.query(q, (err, result) => {
      if(err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

exports.saveMovieInDB = (movie) => {
  return new Promise((resolve, reject) => {
    let q = `INSERT INTO movies (title, description, img_source, to_watch) VALUES ("${movie.name}", "${movie.text}", "${movie.imgSource}", ${movie.toWatch})`;
    db.connection.query(q, (err, result) => {
      if(err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}