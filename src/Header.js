import React, { useState } from "react";

const Header = ({ handleSearch, isSearched }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputClear = () => {
    if (isSearched) {
      setInputValue("");
    }
  };

  return (
    <header className="header-container">
      <h1 className="app-title">Rate your Movie</h1>
      <p className="header-desc">
        Have you just watched an amazing movie and want to share that delight
        with other people? Or the movie was a disaster and you want to save
        others from that nightmare? You are in the right place! Find a movie by
        typing it's title below and feel free to rate it!
      </p>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-input"
          onChange={handleInputClear}
          placeholder="Find a movie"
          type="text"
          value={inputValue}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default Header;
