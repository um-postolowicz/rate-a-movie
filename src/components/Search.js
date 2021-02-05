import React from "react";

const Search = ({ handleInput, handleSearch, inputValue, isDetailPage }) => {
  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        className="search__input"
        onChange={handleInput}
        placeholder="Find a movie"
        type="text"
        value={inputValue}
      />
      <button className="search__btn btn" onClick={handleSearch} type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
