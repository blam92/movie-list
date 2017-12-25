import React from 'react';
import './MovieTab.css';

let MovieTab = (props) => (
    <div className="container-fluid">
      <ul className="nav navbar-nav">
        <li className="btn-success">Watched</li>
        <li className="btn-default">To Watch</li>
      </ul>
    </div>
);

export default MovieTab;