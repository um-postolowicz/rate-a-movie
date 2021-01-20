import React from "react";
import Movie from "../components/Movie";
import Select from "react-select";

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#d57eeb" : "transparent",
    color: state.isSelected ? "white" : "black",
    fontSize: "1.2rem",
    padding: 20,
  }),
};

const options = [
  { value: "title", label: "Title of the movie" },
  { value: "year", label: "Year of production" },
];

const MoviesList = (props) => {
  return (
    <>
      <div className="select__container">
        <p className="select__title">Sort by:</p>
        <Select
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
        />
      </div>
      <ul className="movies">
        {props.movies.map((movie) =>
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
