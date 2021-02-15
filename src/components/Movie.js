import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Rate from "./Rate";
import noPoster from "../images/no-poster.svg";

const Movie = ({ index, poster, searchValue, title, type, year }) => {
  const [showRate, setShowRate] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const imgSrc = ref.current.getAttribute("src");
    if (imgSrc === "N/A") {
      ref.current.attributes.src.textContent = noPoster;
    }
  });

  const handleRateClick = (e) => {
    e.preventDefault();
    setShowRate(true);
  };

  return (
    <li className="movies__container">
      <h2 className="movies__title">{title}</h2>
      <p className="movies__type">{type.toUpperCase()}</p>
      <h3 className="movies__year">{year}</h3>
      <img
        alt="movie poster"
        className="movies__poster"
        ref={ref}
        src={poster}
      />
      <NavLink className="movies__btn btn" to={`/${searchValue}/${index}`}>
        See details
      </NavLink>
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
