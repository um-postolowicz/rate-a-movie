import React, { useRef } from "react";
import Star from "./Star";

const Rate = () => {
  const ref = useRef(null);
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
    <div className="movies__stars" ref={ref}>
      <Star id="1" />
      <Star id="2" />
      <Star id="3" />
      <Star id="4" />
      <Star id="5" />
    </div>
  );
};

export default Rate;
