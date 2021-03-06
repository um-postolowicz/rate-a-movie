import React from "react";
import Search from "./Search";

const SearchBar = () => {
  return (
    <>
      <div className="search-bar">
        <div className="search-bar__container">
          <h4 className="search-bar__logo">R Y M</h4>
          <Search />
        </div>
      </div>
    </>
  );
};

export default SearchBar;
