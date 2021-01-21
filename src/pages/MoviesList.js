import React, { useRef, useState } from "react";
import Movie from "../components/Movie";

const MoviesList = (props) => {
  const { movies } = props;
  const [isChanged, setIsChanged] = useState(false);
  const [moviesList, setMoviesList] = useState("");

  const ref = useRef(null);

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
      {props.isSearch && (
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
            <option value="title-down">Title of the movie (descending)</option>
            <option value="year-up">Year of the production (ascending)</option>
            <option value="year-down">
              Year of the production (descending)
            </option>
          </select>
        </form>
      )}
      <ul className="movies">
        {moviesList
          ? moviesList.map((movie) =>
              movie.Type === "movie" || "series" ? (
                <Movie
                  key={movie.imdbID}
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
