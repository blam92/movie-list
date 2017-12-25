import React, { Component } from 'react';
import MovieListEntry from '../MovieListEntry/MovieListEntry';
import './MovieList.css';
import AddMovie from '../AddMovie/AddMovie';

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
      searchedValue: '',
      movies: hardCodedList
    }

    this.handleChange = this.handleChange.bind(this);
    this.addMovieToList = this.addMovieToList.bind(this);
  }
  
  handleChange(event) {
    this.setState({searchedValue: event.target.value});
  }

  addMovieToList(movie) {
    hardCodedList.push(movie);
    this.setState({
      movies: hardCodedList
    });
  }

  render() {
    const listEntries = this.state.movies.map((movie) => {
      return <MovieListEntry name={movie.name} text={movie.text} imgSource={movie.imgSource}/>
    });
    const filteredListEntries = listEntries.filter((element) => {
      return element.props.name.includes(this.state.searchedValue);
    });

    return(
    <div>
      <AddMovie addMovieToList={this.addMovieToList}/>
      <div className="search-bar"> 
        <input placeholder="Search Movie..." value={this.state.searchedValue} type="text" name="search" onChange={this.handleChange} className="form-control"/>
      </div>
      
      <ul>
        {filteredListEntries}
      </ul>
    </div> 
    );
  }
}

export default MovieList;