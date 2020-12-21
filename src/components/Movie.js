import React, { useState } from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const Movie = ({ poster, title, type, year }) => {
  const [showRate, setShowRate] = useState(false);
  const handleStarRate = (e) => {
    e.preventDefault();
    setShowRate(true);
    console.log(e);
  };
  return (
    <li className="movies__container">
      <h2 className="movies__title">{title}</h2>
      <p className="movies__type">{type.toUpperCase()}</p>
      <h3 className="movies__year">{year}</h3>
      <img alt="movie poster" className="movies__poster" src={poster} />
      <button className="movies__btn btn">See details</button>
      {showRate ? (
        <div className="movies__stars">
          <BsStar className="movies__star" />
          <BsStar className="movies__star" />
          <BsStar className="movies__star" />
          <BsStar className="movies__star" />
          <BsStar className="movies__star" />
        </div>
      ) : (
        <button className="movies__btn btn" onClick={handleStarRate}>
          Rate it!
        </button>
      )}

      {/* <BsStar />
      <BsStarFill />
      <BsStarHalf /> */}
    </li>
  );
};

export default Movie;
