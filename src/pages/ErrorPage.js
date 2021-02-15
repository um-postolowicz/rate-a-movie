import React from "react";
import errorIcon from "../images/erroricon.svg";

const ErrorPage = () => {
  return (
    <>
      <div className="error">
        <img className="error__sign" src={errorIcon} alt="error icon" />
        <h1 className="error__text">
          Sorry, but the title you entered was most probably misspelled. Try to
          enter it again.
        </h1>
      </div>
    </>
  );
};

export default ErrorPage;
