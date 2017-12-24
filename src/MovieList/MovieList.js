import React, { Component } from 'react';
import MovieListEntry from '../MovieListEntry/MovieListEntry';
import './MovieList.css';

const hardCodedList = [
  {name: 'Mean Girls', text: 'Girly Movie', imgSource: 'mean-girls.jpg'},
  {name: 'Hackers', text: 'Hacker Movie?', imgSource: 'hackers.jpg'},
  {name: 'The Grey', text: 'A Grey Movie', imgSource: 'the-grey.jpg'},
  {name: 'Star Wars', text: 'Luke I am your father!', imgSource: 'star-wars.jpg'}
];

class MovieList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const listEntries = hardCodedList.map((movie) => {
      return <MovieListEntry name={movie.name} text={movie.text} imgSource={movie.imgSource}/>
    });

    return <ul>
      {listEntries}
    </ul>
  }
}

export default MovieList;