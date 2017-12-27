import React, { Component } from 'react';
import MovieListEntry from '../MovieListEntry/MovieListEntry';
import './MovieList.css';
import AddMovie from '../AddMovie/AddMovie';
import MovieTab from '../MovieTab/MovieTab';
import NoMovies from '../NoMovies/NoMovies';
import $ from 'jquery';

const SERVER_URL = 'http://127.0.0.1:8080';
const MOVIES = '/api/movies';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedValue: '',
      movies: [],
      toWatchTabSelected: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.addMovieToList = this.addMovieToList.bind(this);
    this.addToWatchList = this.addToWatchList.bind(this);
    this.changeTab = this.changeTab.bind(this);
  }
  
  componentDidMount() {
    $.get(SERVER_URL + MOVIES, (results, status) => {
      this.setState({
        movies: results
      });
    });
  }
  handleChange(event) {
    this.setState({searchedValue: event.target.value});
  }

  addMovieToList(movie) {
    this.setState({
      movies: this.state.movies.concat([movie])
    });
    console.log(movie);
    $.ajax({
      type: "POST",
      url: SERVER_URL + MOVIES,
      data: JSON.stringify(movie),
      success: () => console.log('movie sent to server:', movie),
      reject: (err) => console.log('POST error: ', err),
      dataType: 'json'
    });
  }

  addToWatchList(index) {
    let updatedList = this.state.movies.slice();
    updatedList[index].toWatch = !updatedList[index].toWatch
    this.setState({
      movies: updatedList
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
        <AddMovie addMovieToList={this.addMovieToList} toWatchTab={this.state.toWatchTabSelected}/>
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