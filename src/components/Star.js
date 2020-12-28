import React from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const Star = ({ id, isFill, onClick }) => {
  return (
    <div className="movies__star" id={id} onClick={onClick}>
      {isFill ? <BsStarFill /> : <BsStar />}
    </div>
  );
};

export default Star;
