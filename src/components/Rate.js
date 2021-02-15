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
  const [isRateSent, setIsRateSent] = useState(false);
  const [stars, setStars] = useState(starsBasic);

  const handleRate = (e) => {
    let table = [...starsBasic];
    setStars(table);
    const clickPosition = e.clientX;
    const margin = ref.current.offsetParent.offsetLeft;
    const starsLeft = ref.current.offsetLeft;
    const clickPositionInStarsDiv = clickPosition - starsLeft - margin - 2;
    const starId = Math.ceil(clickPositionInStarsDiv / 12.5);
    stars.forEach((element) => (element.icon = <BsStar />));
    for (let i = 0; i < starId / 2; i++) {
      stars[i].icon = <BsStarFill />;
    }
    if (starId % 2 !== 0) {
      const index = Math.floor(starId / 2);
      stars[index].icon = <BsStarHalf />;
    }
    return stars;
  };

  const sendRate = () => {
    setIsRateSent(true);
    let table = starsBasic.map((star) => (star.icon = <BsStar />));
    setStars(table);
  };

  return (
    <>
      {isRateSent ? (
        <p className="movies__rate-sent">Thank you for your rate!</p>
      ) : (
        <div className="movies__rate-and-send">
          <ul className="movies__stars" onClick={handleRate} ref={ref}>
            {stars.map((star) => (
              <li key={star.id}>{star.icon}</li>
            ))}
          </ul>
          <button
            className="movies__btn btn movies__btn--rate"
            onClick={sendRate}
          >
            Send
          </button>
        </div>
      )}
    </>
  );
};

export default Rate;
