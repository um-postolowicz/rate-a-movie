import React from "react";
import Search from "./Search";

const SearchBar = ({ handleInput, handleSearch, inputValue }) => {
  return (
    <>
      <div className="search-bar">
        <h4 className="search-bar__logo">R Y M</h4>
        <Search
          handleInput={handleInput}
          handleSearch={handleSearch}
          inputValue={inputValue}
        />
      </div>
    </>
  );
};

export default SearchBar;
