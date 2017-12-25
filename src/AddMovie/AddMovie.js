import React, { Component } from 'react';
import './AddMovie.css';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick(event) {
    let movie = {name: this.state.value, text: 'hardcodedMovie', imgSource: 'placeholder.png'}
    this.props.addMovieToList(movie);
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <div className="add-movie">
          <input placeholder="Add movie title here" type="text" name="add" className="form-control" value={this.state.value} onChange={this.handleChange}/>
          <input type="submit" value="Add" className="btn btn-success" onClick={this.handleClick}/>
      </div>
      );
    }
}

export default AddMovie;