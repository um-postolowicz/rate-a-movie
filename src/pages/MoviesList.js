import React, { useEffect, useRef, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import Header from "../components/Header";
import Movie from "../components/Movie";
import Search from "../components/Search";
import SearchBar from "../components/SearchBar";

const API_KEY = "2fc6065a";
const BASE_API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;

const MoviesList = (props) => {
  const searchValue = window.location.pathname.substring(1);

  const [movies, setMovies] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [moviesList, setMoviesList] = useState("");

  const ref = useRef(null);

  const scrollAfterSearch = () => {
    const scrollHeight = window.innerHeight;
    scroll.scrollTo(scrollHeight);
  };

  useEffect(() => {
    setMovies([]);
    if (!searchValue) return;
    fetch(BASE_API_URL + `"${searchValue}"`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Http error: ${response.status}`);
        }
      })
      .then((response) => setMovies(response.Search))
      .catch((error) => console.log(error));
    scrollAfterSearch();
    setIsSearch(true);
  }, [searchValue]);

  const handleSelect = () => {
    setIsChanged(!isChanged);
    const select = ref.current;
    const selected = select.options[select.selectedIndex].value;
    let moviesSort = movies;
    if (selected === "title-up") {
      moviesSort.sort((a, b) => (a.Title > b.Title ? 1 : -1));
    } else if (selected === "title-down") {
      moviesSort.sort((a, b) => (b.Title > a.Title ? 1 : -1));
    } else if (selected === "year-up") {
      moviesSort.sort((a, b) => (a.Year > b.Year ? 1 : -1));
    } else if (selected === "year-down") {
      moviesSort.sort((a, b) => (b.Year > a.Year ? 1 : -1));
    }
    setMoviesList(moviesSort);
  };

  return (
    <>
      <Header />
      <Search />
      {isSearch && (
        <>
          <SearchBar />
          <form className="select__container">
            <label className="select__title" htmlFor="select">
              Sort by:
            </label>
            <select
              name="select"
              id="select"
              className="select__list"
              onChange={handleSelect}
              ref={ref}
            >
              <option value="default">Select...</option>
              <option value="title-up">Title of the movie (ascending)</option>
              <option value="title-down">
                Title of the movie (descending)
              </option>
              <option value="year-up">
                Year of the production (ascending)
              </option>
              <option value="year-down">
                Year of the production (descending)
              </option>
            </select>
          </form>
        </>
      )}
      <ul className="movies">
        {moviesList
          ? moviesList.map((movie) =>
              movie.Type === "movie" || "series" ? (
                <Movie
                  key={movie.imdbID}
                  index={movie.imdbID}
                  poster={movie.Poster}
                  title={movie.Title}
                  type={movie.Type}
                  year={movie.Year}
                />
              ) : null
            )
          : movies.map((movie) =>
              movie.Type === "movie" || "series" ? (
                <Movie
                  key={movie.imdbID}
                  index={movie.imdbID}
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
};

export default MoviesList;
