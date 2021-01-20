import React, { useRef, useState } from "react";
import Movie from "../components/Movie";
// import Select from "react-select";

// const customStyles = {
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.isSelected ? "#d57eeb" : "transparent",
//     color: state.isSelected ? "white" : "black",
//     fontSize: "1.2rem",
//     padding: 20,
//   }),
// };

// const options = [
//   { value: "title", label: "Title of the movie" },
//   { value: "year", label: "Year of production" },
// ];

const MoviesList = (props) => {
  const { movies } = props;
  const [moviesList, setMoviesList] = useState("");

  const ref = useRef(null);

  const handleSelect = () => {
    const select = ref.current;
    const selected = select.options[select.selectedIndex].value;
    const moviesSort = movies;
    if (selected === "year-up") {
      moviesSort.sort((a, b) => (a.Year > b.Year ? 1 : -1));
      setMoviesList(moviesSort);
    }
  };

  return (
    <>
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
          <option value="title-up">Title of the movie (ascending)</option>
          <option value="title-down">Title of the movie (descending)</option>
          <option value="year-up">Year of the production (ascending)</option>
          <option value="year-down">Year of the production (descending)</option>
        </select>
        {/* <Select
          options={options}
          styles={customStyles}
          theme={(theme) => ({
            ...theme,
            borderRadius: 7,
            colors: {
              ...theme.colors,
              primary: `#d57eeb`,
            },
          })}
        /> */}
      </form>
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
