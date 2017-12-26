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