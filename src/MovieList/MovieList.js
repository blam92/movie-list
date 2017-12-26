import React, { Component } from 'react';
import MovieListEntry from '../MovieListEntry/MovieListEntry';
import './MovieList.css';
import AddMovie from '../AddMovie/AddMovie';
import MovieTab from '../MovieTab/MovieTab';
import NoMovies from '../NoMovies/NoMovies';

const hardCodedList = [
  {name: 'Mean Girls', text: 'Girly Movie', imgSource: 'mean-girls.jpg', toWatch: true},
  {name: 'Hackers', text: 'Hacker Movie?', imgSource: 'hackers.jpg', toWatch: false},
  {name: 'The Grey', text: 'A Grey Movie', imgSource: 'the-grey.jpg', toWatch: false},
  {name: 'Star Wars', text: 'Luke I am your father!', imgSource: 'star-wars.jpg', toWatch: false}
];

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedValue: '',
      movies: hardCodedList,
      toWatchTabSelected: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.addMovieToList = this.addMovieToList.bind(this);
    this.addToWatchList = this.addToWatchList.bind(this);
    this.changeTab = this.changeTab.bind(this);
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

  addToWatchList(index) {
    hardCodedList[index].toWatch = !hardCodedList[index].toWatch;
    this.setState({
      movies: hardCodedList
    });
  }

  changeTab() {
    this.setState({
      toWatchTabSelected: !this.state.toWatchTabSelected
    });
  }

  render() {
    const listEntries = this.state.movies.map((movie, index) => {
      return <MovieListEntry name={movie.name} text={movie.text} 
      imgSource={movie.imgSource} toWatch={movie.toWatch} 
      key={index} index={index} addToWatchList={this.addToWatchList}/>
    });
    const filteredListEntries = listEntries.filter((element) => {
      if(this.state.toWatchTabSelected) {
        return element.props.name.includes(this.state.searchedValue) && element.props.toWatch;
      } else {
        return element.props.name.includes(this.state.searchedValue);
      }
    });

    const moviesFound = filteredListEntries.length > 0 ? filteredListEntries : <NoMovies/>;

    return(
    <div>
      <AddMovie addMovieToList={this.addMovieToList}/>
      <div className="search-bar"> 
        <input placeholder="Search Movie..." value={this.state.searchedValue} type="text" name="search" onChange={this.handleChange} className="form-control"/>
      </div>
      
      <MovieTab toWatchTabSelected={this.state.toWatchTabSelected} changeTab={this.changeTab}/>
      <ul className="list-group">
        {moviesFound}
      </ul>
    </div> 
    );
  }
}

export default MovieList;