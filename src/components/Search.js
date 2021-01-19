import React from "react";
import { Link } from "react-router-dom";

const Search = ({ handleInput, handleSearch, inputValue }) => {
  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        className="search__input"
        onChange={handleInput}
        placeholder="Find a movie"
        type="text"
        value={inputValue}
      />
      <Link className="search__btn btn" onClick={handleSearch} to="/movies">
        Search
      </Link>
    </form>
  );
};

export default Search;
