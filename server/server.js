const express = require('express');
const app = express();
const controller = require('./controller');
const path = require('path');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  next();
});

app.use(express.static(path.join(__dirname, '../build')));

app.get('/api/movies', (req, res) => {
  controller.get().then((movies) => {
    res.status(200).json(movies);
  });
});

app.post('/api/movies', (req, res) => {
  controller.post(req, res).then(() => {
    res.status(201).json({});
  });
});

app.put('/api/movies/:movieId', (req, res) => {
  console.log(req.params);
  controller.put(req, res).then(() => {
    res.status(200).json(req.params);
  });
});


app.listen(8080, () => {
  console.log('App running in port 8080');
})