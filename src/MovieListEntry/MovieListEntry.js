import React, {Component} from 'react';
import './MovieListEntry.css';

class MovieListEntry extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.addToWatchList(this.props.index);
  }

  render() {
    return (
      <li className="list-group-item" onClick={this.handleClick}>
          <img className="thumbnail" src={"/images/" + this.props.imgSource} alt={this.props.name} />
          <h3> {this.props.name} </h3>
          <p> {this.props.text} </p>
          {this.props.toWatch && <p><b>Need To Watch This</b></p>}
      </li>
    );
  }
} 

export default MovieListEntry; 