const express = require('express');
const app = express();
const controller = require('./controller');

const hardCodedList = [
  {name: 'Mean Girls', text: 'Girly Movie', imgSource: 'mean-girls.jpg', toWatch: true},
  {name: 'Hackers', text: 'Hacker Movie?', imgSource: 'hackers.jpg', toWatch: false},
  {name: 'The Grey', text: 'A Grey Movie', imgSource: 'the-grey.jpg', toWatch: false},
  {name: 'Star Wars', text: 'Luke I am your father!', imgSource: 'star-wars.jpg', toWatch: false}
];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello Word');
});

app.get('/api/movies', (req, res) => {
  controller.get().then((movies) => {
    console.log(movies);
    res.status(200).json(movies);
  });
});
app.listen(8080, () => {
  console.log('App running in port 8080');
})