import React from "react";
import { useHistory } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

const ButtonDetails = ({ buttonContent }) => {
  const history = useHistory();
  return (
    <>
      <button className="back logo-back__btn" onClick={() => history.goBack()}>
        <FaArrowCircleLeft className="back__icon" />
        <p className="back__text">{buttonContent}</p>
      </button>
    </>
  );
};

export default ButtonDetails;
