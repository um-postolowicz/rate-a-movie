import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__color-opacity">
        <div className="header__container">
          <h1 className="header__title">Rate your Movie</h1>
          <p className="header__desc">
            <span>
              Have you just watched an amazing movie and want to share that
              delight with other people?
            </span>{" "}
            <span>
              Or the movie was a disaster and you want to save others from that
              nightmare?
            </span>{" "}
            <span>You are in the right place!</span>{" "}
            <span>
              Find a movie by typing it's title below and feel free to rate it!
            </span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
