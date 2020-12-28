import React, { useState } from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const Star = ({ id }) => {
  const [isFill, setIsFill] = useState(false);
  const handleFill = (e) => {
    // console.log(e.currentTarget.id);
    const clickPosition = e.clientX;
    const windowWidth = window.innerWidth;
    // const starsWidth = ref.current.offsetWidth;
    const starsWidth = 125;
    const clickPositionInStarsDiv =
      clickPosition - (windowWidth - starsWidth) / 2;
    const starId = Math.ceil(clickPositionInStarsDiv / 25);
    if (parseInt(e.currentTarget.id) === starId) {
      setIsFill(!isFill);
    }
  };

  return (
    <div className="movies__star" id={id} onClick={handleFill}>
      {isFill ? <BsStarFill /> : <BsStar />}
    </div>
  );
};

export default Star;
