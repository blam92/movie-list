import React, { Component } from 'react';
import './App.css';
import MovieList from '../MovieList/MovieList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Best Movie List</h1>
        </header>
        <div className="movie-list">
          <MovieList/>
        </div>
      </div>
    );
  }
}

export default App;
