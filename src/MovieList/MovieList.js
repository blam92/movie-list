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
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const listEntries = hardCodedList.map((movie) => {
      return <MovieListEntry name={movie.name} text={movie.text} imgSource={movie.imgSource}/>
    });

    return(
    <div>
      <p>test: {this.state.value} </p>
      <div className="search-bar"> 
        <span>Search Movie: </span>
        <input value={this.state.value} type="text" name="search" onChange={this.handleChange}/>
      </div>
      
      <ul>
        {listEntries}
      </ul>
    </div> 
    );
  }
}

export default MovieList;