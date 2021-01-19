import React from "react";
import { Route, Switch } from "react-router-dom";
import Details from "../pages/Details";
import MoviesList from "../pages/MoviesList";

const Routing = ({ movies }) => {
  return (
    <>
      <Switch>
        <Route path="/">
          <MoviesList movies={movies} />
        </Route>
        <Route path="/details" component={Details} />
      </Switch>
    </>
  );
};

export default Routing;
