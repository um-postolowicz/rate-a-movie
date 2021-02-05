import React, { useEffect, useState } from "react";
import noPoster from "../images/no-poster.svg";

const API_KEY = "2fc6065a";
const DETAIL_API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=`;

const Details = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const {
    Actors,
    Awards,
    Country,
    Director,
    Genre,
    Plot,
    Poster,
    Ratings,
    Released,
    Runtime,
    Title,
    Type,
    Writer,
  } = movieDetails;

  useEffect(() => {
    const index = window.location.pathname.substring(1);
    setMovieDetails([]);
    fetch(DETAIL_API_URL + index)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Http error: ${response.status}`);
        }
      })
      .then((response) => setMovieDetails(response))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {movieDetails ? (
        <>
          <div className="movie">
            <h1 className="movie__title">{Title}</h1>
            <p className="movie__type">{Type}</p>
            <img
              alt="Movie poster"
              className="movie__poster"
              src={Poster ? Poster : noPoster}
            />
            <p className="movie__description">{Plot}</p>
            <div className="movie__information">
              <h2 className="movie__info-title">Info:</h2>
              <p className="movie__genre">
                Genre: <span>{Genre}</span>
              </p>
              <p className="movie__country">
                Country: <span>{Country}</span>
              </p>
              <p className="movie__director">
                Director: <span>{Director}</span>
              </p>
              <p className="movie__date">
                Date of release: <span>{Released}</span>
              </p>
              <p className="movie__writers">
                Writers: <span>{Writer}</span>
              </p>
              <p className="movie__actors">
                Actors: <span>{Actors}</span>
              </p>
              <p className="movie__runtime">
                Runtime: <span>{Runtime}</span>
              </p>
              <p className="movie__awards">
                Awards: <span>{Awards}</span>
              </p>
            </div>
            <div className="movie__rates">
              <h2 className="movie__rate-title">Rates:</h2>
              {Ratings ? (
                Ratings.map((rating) => (
                  <p className="movie__other-rate" key={rating.Source}>
                    {rating.Source}: <span>{rating.Value}</span>
                  </p>
                ))
              ) : (
                <p className="movie__no-rate">No other rates avaliable.</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};
export default Details;
