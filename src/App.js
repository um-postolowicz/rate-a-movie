import React, { useEffect, useState } from "react";
import "./App.css";

const API_KEY = "8c8f7131";
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s="matrix"`;

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
      <h1 className="app-title">Find your Movie</h1>
      <input className="search" type="text" />
      <ul className="movies-list"></ul>
    </>
  );
}

export default App;
