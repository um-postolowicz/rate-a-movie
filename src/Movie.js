import React from "react";

const Movie = ({ poster, title, year }) => {
  return (
    <li className="movie-container">
      <h2 className="movie-title">{title}</h2>
      <img alt="movie poster" className="movie-poster" src={poster} />
      <p className="movie-year">{year}</p>
    </li>
  );
};

export default Movie;
