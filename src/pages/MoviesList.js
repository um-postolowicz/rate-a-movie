import React from "react";
import Movie from "../components/Movie";

const MoviesList = (props) => {
  return (
    <>
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
