import React, { useEffect, useState } from "react";

const API_KEY = "2fc6065a";
const DETAIL_API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&i=`;

const Details = () => {
  const [movieDetails, setMovieDetails] = useState([]);

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
          <h1>{movieDetails.Title}</h1>
          <h3>{movieDetails.Actors}</h3>
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};
export default Details;
