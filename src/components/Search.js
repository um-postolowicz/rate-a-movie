import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();
  const ref = useRef(null);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!inputValue) {
      ref.current.placeholder = "You have to type a title";
      ref.current.classList.add("no-input");
      console.log(ref.current.classList);
    } else {
      ref.current.placeholder = "Find a movie";
      ref.current.classList.remove("no-input");
    }
    history.push(`/${inputValue}`);
    setInputValue("");
  };

  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        className="search__input"
        onChange={handleInput}
        placeholder="Find a movie"
        ref={ref}
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
