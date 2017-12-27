const dbController = require('./database/dbController');

exports.get = () => {
  return new Promise((resolve, reject) => {
    dbController.getMoviesFromDB().then((result) => {
      var movieList = result.map((value) => {
        return {
            name: value.title,
            text: value.description,
            imgSource: value.img_source
          }
      });
      resolve(movieList);
    }).catch((err) => {
      reject(err);
    });
  });
}

exports.post = (req, res) => {
  return new Promise((resolve, reject) => {
    let movie = '';
    req.on('data', (chunk) => {
      movie += chunk
    });
    req.on('end', () => {
      dbController.saveMovieInDB(JSON.parse(movie)).then((result) => {
        resolve(result);
      }).catch((err) => {
        reject(err);
      });
    });
  });
}