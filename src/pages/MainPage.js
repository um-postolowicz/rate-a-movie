import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import Header from "../components/Header";
import MoviesList from "../pages/MoviesList";
import Search from "../components/Search";

const API_KEY = "2fc6065a";
const BASE_API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;

const MainPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const scrollAfterSearch = () => {
    const scrollHeight = window.innerHeight;
    scroll.scrollTo(scrollHeight);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setMovies([]);
    if (!inputValue) return;
    fetch(BASE_API_URL + `"${inputValue}"`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Http error: ${response.status}`);
        }
      })
      .then((response) => setMovies(response.Search))
      .catch((error) => console.log(error));
    setInputValue("");
    scrollAfterSearch();
    setIsSearch(true);
  };

  return (
    <div className="wrapper">
      <Header />
      <Search
        handleInput={handleInput}
        handleSearch={handleSearch}
        inputValue={inputValue}
      />
      <main>
        <MoviesList
          handleInput={handleInput}
          handleSearch={handleSearch}
          inputValue={inputValue}
          isSearch={isSearch}
          movies={movies}
        />
      </main>
    </div>
  );
};

export default MainPage;
