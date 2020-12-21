import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import "./styles/style.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";

const API_KEY = "2fc6065a";
const BASE_API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;

function App() {
  const [inputValue, setInputValue] = useState("");
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
    fetch(BASE_API_URL + `"${inputValue}"`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Http error: ${response.status}`);
        }
      })
      .then((response) => setMovies(response.Search))
      .catch((error) => console.log(`Błąd: ${error}`));
    setInputValue("");
    scrollAfterSearch();
  };

  return (
    <>
      <div className="wrapper">
        <Header />
        <Search
          handleInput={handleInput}
          handleSearch={handleSearch}
          inputValue={inputValue}
        />
        <ul className="movies">
          {movies.map((movie) =>
            movie.Type === "movie" || "series" ? (
              <Movie
                key={movie.imdbID}
                poster={movie.Poster}
                title={movie.Title}
                type={movie.Type}
                year={movie.Year}
              />
            ) : null
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
