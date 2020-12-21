import React from "react";

const Movie = ({ poster, title, type, year }) => {
  return (
    <li className="movies__container">
      <h2 className="movies__title">{title}</h2>
      <p className="movies__type">{type.toUpperCase()}</p>
      <h3 className="movies__year">{year}</h3>
      <img alt="movie poster" className="movies__poster" src={poster} />
      <button className="movies__btn">See details</button>
      <button className="movies__btn">Rate it!</button>
    </li>
  );
};

export default Movie;
