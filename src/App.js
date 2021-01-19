import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/style.css";
import Routing from "./components/Routing";
import StartPage from "./pages/StartPage";

const API_KEY = "2fc6065a";
const BASE_API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;

function App() {
  const [isDetails, setIsDetails] = useState(false);
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
    console.log(window.location.origin, window.location.href);
  };

  return (
    <Router>
      <div className="wrapper">
        {isDetails ? null : (
          <StartPage
            handleInput={handleInput}
            handleSearch={handleSearch}
            inputValue={inputValue}
          />
        )}

        <main>
          <Routing movies={movies} />
        </main>
      </div>
    </Router>
  );
}

export default App;
