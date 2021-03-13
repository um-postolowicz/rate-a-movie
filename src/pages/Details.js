import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import noPoster from "../images/no-poster.svg";
import Rate from "../components/Rate";
import ButtonDetails from "../components/ButtonDetails";

const API_KEY = process.env.REACT_APP_API_KEY;
const DETAIL_API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&i=`;

const Details = () => {
  const [isPortrait, setIsPortrait] = useState(false);
  const [isBig, setIsBig] = useState(true);
  const [movieDetails, setMovieDetails] = useState([]);
  let { id } = useParams();
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

  const checkOrientation = () => {
    if (window.matchMedia("(orientation:portrait)").matches) {
      setIsPortrait(true);
    } else {
      setIsPortrait(false);
    }
    if (
      window.matchMedia("(min-width:767px) and (orientation:portrait)")
        .matches ||
      window.matchMedia("(min-width:1023px) and (orientation:landscape)")
        .matches
    ) {
      setIsBig(true);
    } else {
      setIsBig(false);
    }
  };

  useEffect(() => {
    checkOrientation();
    scroll.scrollTo(0);
    setMovieDetails([]);
    fetch(DETAIL_API_URL + id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Http error: ${response.status}`);
        }
      })
      .then((response) => setMovieDetails(response))
      .catch((error) => console.log(error));
    window.addEventListener("orientationchange", checkOrientation);
    return () => {
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, [id, isPortrait, isBig]);

  return (
    <>
      {movieDetails ? (
        <>
          {isBig ? (
            <div className="logo-back">
              <ButtonDetails buttonContent={"Go Back to Movies List"} />
              <h1 className="logo-back__logo">Rate your movie</h1>
            </div>
          ) : (
            <ButtonDetails
              buttonContent={isPortrait ? "Go Back to Movies List" : null}
            />
          )}

          <div className="movie">
            <h1 className="movie__title">{Title}</h1>
            <p className="movie__type">{Type}</p>
            <img
              alt="Movie poster"
              className="movie__poster"
              src={Poster ? Poster : noPoster}
            />
            <p className="movie__description">{Plot}</p>
            <div className="movie__user-rate">
              <h2 className="movie__user-rate-title">Rate it:</h2>
              <Rate />
            </div>
            <div className="movie__information">
              <h2 className="movie__information-title">Info:</h2>
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
              <p className="movie__actors">
                Actors: <span>{Actors}</span>
              </p>
              <p className="movie__writers">
                Writers: <span>{Writer}</span>
              </p>
              <p className="movie__runtime">
                Runtime: <span>{Runtime}</span>
              </p>
              <p className="movie__awards">
                Awards: <span>{Awards}</span>
              </p>
            </div>
            <div className="movie__rates">
              <h2 className="movie__rates-title">Rates:</h2>
              {Ratings ? (
                Ratings.map((rating) => (
                  <p className="movie__rates-types" key={rating.Source}>
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
        <h1>Lala</h1>
      )}
    </>
  );
};
export default Details;
