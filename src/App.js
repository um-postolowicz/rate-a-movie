import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Movie from "./Movie";

const API_KEY = "8c8f7131";
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s="avengers"`;

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Http error: ${response.status}`);
        }
      })
      .then((response) => setMovies(response.Search))
      .catch((error) => console.log(`Błąd: ${error}`));
  }, []);

  return (
    <>
      {/* <h1 className="app-title">Rate your Movie</h1>
      <input className="search" type="text" />
      <ul className="movies-list"> */}
      <Header />
      <ul className="movies-list">
        {movies.map((movie) =>
          movie.Type === "movie" ? (
            <Movie
              key={movie.imdbID}
              poster={movie.Poster}
              title={movie.Title}
              year={movie.Year}
            />
          ) : null
        )}
      </ul>
    </>
  );
}

export default App;
