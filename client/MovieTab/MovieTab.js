import React, {Component} from 'react';
import './MovieTab.css';

class MovieTab extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    if(event.currentTarget.className !== 'btn-success') {
      this.props.changeTab();
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <li className={this.props.toWatchTabSelected ? "btn-default" : "btn-success"} onClick={this.handleClick}>Watched</li>
          <li className={this.props.toWatchTabSelected ? "btn-success" : "btn-default"} onClick={this.handleClick}>To Watch</li>
        </ul>
      </div>
    );
  }
} 


export default MovieTab;