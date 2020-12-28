import React, { useState } from "react";
import Rate from "./Rate";

const Movie = ({ poster, title, type, year }) => {
  const [showRate, setShowRate] = useState(false);

  const handleRateClick = (e) => {
    e.preventDefault();
    setShowRate(true);
  };

  return (
    <li className="movies__container">
      <h2 className="movies__title">{title}</h2>
      <p className="movies__type">{type.toUpperCase()}</p>
      <h3 className="movies__year">{year}</h3>
      <img alt="movie poster" className="movies__poster" src={poster} />
      <button className="movies__btn btn">See details</button>
      {showRate ? (
        <Rate />
      ) : (
        <button className="movies__btn btn" onClick={handleRateClick}>
          Rate it!
        </button>
      )}
    </li>
  );
};

export default Movie;
