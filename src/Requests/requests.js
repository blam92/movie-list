import $ from 'jquery';
import Promise from 'bluebird';

const SERVER_URL = 'http://127.0.0.1:8080';
const MOVIES = '/api/movies';

let request = {
  post: (movie) => {
    $.ajax({
      type: "POST",
      url: SERVER_URL + MOVIES,
      data: JSON.stringify(movie),
      success: () => console.log('movie sent to server:', movie),
      reject: (err) => console.log('POST error: ', err),
      dataType: 'json'
    });
  },

  get: () => {
    return new Promise((resolve, reject) => {
      $.get(SERVER_URL + MOVIES, (results, status) => {
        if(results === undefined) {
          reject('JQUERY GET ERROR');
        } else {
          resolve(results);
        }
      });
    });
  }
};

export default request;