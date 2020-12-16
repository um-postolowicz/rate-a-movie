import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__color-opacity">
        <div className="header__container">
          <h1 className="header__title">Rate your Movie</h1>
          <p className="header__desc">
            Have you just watched an amazing movie and want to share that
            delight with other people? Or the movie was a disaster and you want
            to save others from that nightmare? You are in the right place! Find
            a movie by typing it's title below and feel free to rate it!
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
