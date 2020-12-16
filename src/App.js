import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Movie from "./Movie";

const API_KEY = "2fc6065a";
const BASE_API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;


function App() {
  const [inputValue, setInputValue] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [movies, setMovies] = useState([]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
    // if (isSearched) {
    //   setInputValue("");
    // }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(BASE_API_URL + `"${inputValue}"`);
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
  };

  return (
    <>
      <Header />
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-input"
          onChange={handleInput}
          placeholder="Find a movie"
          type="text"
          value={inputValue}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      <ul className="movies-list">
        {movies.map((movie) =>
          movie.Type === "movie" ? (
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
    </>
  );
}

export default App;
