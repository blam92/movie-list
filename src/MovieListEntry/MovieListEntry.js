import React from 'react';
import './MovieListEntry.css';

let MovieListEntry = (props) => (
  <li>
      <img src={"/images/" + props.imgSource} alt={props.name} />
      <h3> {props.name} </h3>
      <p> {props.text} </p>
  </li>
);

export default MovieListEntry; 