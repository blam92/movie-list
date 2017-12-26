import React, {Component} from 'react';
import './MovieListEntry.css';

class MovieListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }

    this.addToWatchList = this.addToWatchList.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  addToWatchList(event) {
    this.props.addToWatchList(this.props.index);
  }

  showDetails() {
    this.setState({
      selected: !this.state.selected
    });
  }
  render() {

    return (
      <li className="list-group-item">
          <h3 onClick={this.showDetails}> {this.props.name} </h3>
          {this.state.selected &&
          <div>
            <hr/>
            <img className="thumbnail" src={this.props.imgSource} alt={this.props.name}/>
            <p> {this.props.text} </p>
            {this.props.toWatch ? 
            <button id="add-to-list" className="btn btn-success" onClick={this.addToWatchList}>Added to watchlist</button> : 
            <button id="add-to-list" className="btn btn-default" onClick={this.addToWatchList}>Add to watchlist</button> }
          </div>
          }
      </li>
    );
  }
} 

export default MovieListEntry; 