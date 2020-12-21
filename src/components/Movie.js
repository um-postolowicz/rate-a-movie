import React, { useRef, useState } from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";
import Stars from "./Stars";

const Movie = ({ poster, title, type, year }) => {
  const [showRate, setShowRate] = useState(false);

  const ref = useRef(null);

  const handleRateClick = (e) => {
    e.preventDefault();
    setShowRate(true);
    console.log(e);
  };

  // const handleRateStar = (e) => {
  //   const clickPosition = e.clientX;
  //   const browserWidth = window.innerWidth;
  //   const divStarsWidth = ref.current.offsetWidth;
  // };

  return (
    <li className="movies__container">
      <h2 className="movies__title">{title}</h2>
      <p className="movies__type">{type.toUpperCase()}</p>
      <h3 className="movies__year">{year}</h3>
      <img alt="movie poster" className="movies__poster" src={poster} />
      <button className="movies__btn btn">See details</button>
      {showRate ? (
        <Stars />
      ) : (
        <button className="movies__btn btn" onClick={handleRateClick}>
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
