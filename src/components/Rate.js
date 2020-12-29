import { render } from "@testing-library/react";
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
    const windowWidth = window.innerWidth;
    const starsWidth = ref.current.offsetWidth;
    const clickPositionInStarsDiv =
      clickPosition - (windowWidth - starsWidth) / 2;
    const starId = Math.ceil(clickPositionInStarsDiv / 25);
    table.forEach((element) => (element.icon = <BsStar />));
    for (let i = 0; i < starId; i++) {
      table[i].icon = <BsStarFill />;
    }
    table.map((element) => <li key={element.id}>{element.icon}</li>);
    setStars(table);
    console.log(stars);
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
