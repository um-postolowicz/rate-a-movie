import React, { useRef, useState } from "react";
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

const starsBasic = [
  {
    id: 1,
    icon: <BsStar />,
  },
  {
    id: 2,
    icon: <BsStar />,
  },
  {
    id: 3,
    icon: <BsStar />,
  },
  {
    id: 4,
    icon: <BsStar />,
  },
  {
    id: 5,
    icon: <BsStar />,
  },
];

const Rate = () => {
  const ref = useRef(null);
  const [stars, setStars] = useState(starsBasic);
  const [renderState, setRenderState] = useState(false);

  const handleRate = (e) => {
    setRenderState(!renderState);
    let table = stars;
    const clickPosition = e.clientX;
    const margin = ref.current.offsetParent.offsetLeft;
    const starsLeft = ref.current.offsetLeft;
    console.log(ref);
    const clickPositionInStarsDiv = clickPosition - starsLeft - margin - 2;
    // console.log(clickPosition, starsLeft, clickPositionInStarsDiv);
    const starId = Math.ceil(clickPositionInStarsDiv / 12.5);
    // console.log(starId);
    table.forEach((element) => (element.icon = <BsStar />));
    for (let i = 0; i < starId / 2; i++) {
      table[i].icon = <BsStarFill />;
    }
    if (starId % 2 !== 0) {
      const index = Math.floor(starId / 2);
      table[index].icon = <BsStarHalf />;
    }
    table.map((element) => <li key={element.id}>{element.icon}</li>);
    setStars(table);
    return stars;
  };

  return (
    <ul className="movies__stars" onClick={handleRate} ref={ref}>
      {stars.map((star) => (
        <li key={star.id}>{star.icon}</li>
      ))}
    </ul>
  );
};

export default Rate;
