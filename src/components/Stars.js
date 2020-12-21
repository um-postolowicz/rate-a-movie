import React from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const Stars = () => {
  return (
    <div className="movies__stars">
      <BsStar
        className="movies__star movies__star--one"
        // onClick={handleRateStar}
      />
      <BsStar className="movies__star movies__star--two" />
      <BsStar className="movies__star movies__star--three" />
      <BsStar className="movies__star movies__star--four" />
      <BsStar className="movies__star movies__star--five" />
    </div>
  );
};

export default Stars;
