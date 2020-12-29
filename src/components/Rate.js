import React, { useRef, useState } from "react";
import Star from "./Star";
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
  const [isClicked, setIsClicked] = useState(false);

  const handleRate = (e) => {
    setIsClicked(true);
    let table = stars;
    const clickPosition = e.clientX;
    const windowWidth = window.innerWidth;
    const starsWidth = ref.current.offsetWidth;
    const clickPositionInStarsDiv =
      clickPosition - (windowWidth - starsWidth) / 2;
    const starId = Math.ceil(clickPositionInStarsDiv / 25);
    for (let i = 0; i < starId; i++) {
      table[i].icon = <BsStarFill />;
    }
    table.map((element) => <li key={element.id}>{element.icon}</li>);
    setStars(table);
    console.log(stars);
    return stars;
  };
  // const [isFill, setIsFill] = useState(false);

  // const handleRateStar = (e) => {
  //   const clickPosition = e.clientX;
  //   const windowWidth = window.innerWidth;
  //   const starsWidth = ref.current.offsetWidth;
  //   const clickPositionInStarsDiv =
  //     clickPosition - (windowWidth - starsWidth) / 2;
  //   const starId = Math.ceil(clickPositionInStarsDiv / 25);
  //   if (e.target.id === starId) {
  //     setIsFill(!isFill);
  //   }
  // };

  // const handleFill = (e) => {
  //   // console.log(e.currentTarget.id);
  //   const clickPosition = e.clientX;
  //   const windowWidth = window.innerWidth;
  //   const starsWidth = ref.current.offsetWidth;
  //   const clickPositionInStarsDiv =
  //     clickPosition - (windowWidth - starsWidth) / 2;
  //   const starId = Math.ceil(clickPositionInStarsDiv / 25);
  //   if (parseInt(e.currentTarget.id) === starId) {
  //     setIsFill(!isFill);
  //   }
  // };

  return (
    <ul className="movies__stars" onClick={handleRate} ref={ref}>
      {isClicked
        ? stars.map((star) => <li key={star.id}>{star.icon}</li>)
        : starsBasic.map((star) => <li key={star.id}>{star.icon}</li>)}
    </ul>
  );
};

export default Rate;
