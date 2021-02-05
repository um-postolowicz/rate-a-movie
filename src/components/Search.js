import React, { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/${inputValue}`);
    setInputValue("");
  };

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

export default withRouter(Search);
