import React from "react";
import { Route, Switch } from "react-router-dom";
import Details from "./Details";
import MoviesList from "./MoviesList";

const Routing = ({ movies }) => {
  return (
    <>
      <Switch>
        <Route path="/movies">
          <MoviesList movies={movies} />
        </Route>
        <Route path="/details" component={Details} />
      </Switch>
    </>
  );
};

export default Routing;
