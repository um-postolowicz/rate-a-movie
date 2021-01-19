import React from "react";
import { Route, Switch } from "react-router-dom";
import Details from "../pages/Details";
import MainPage from "../pages/MainPage";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={MainPage} />
        <Route path="/details" component={Details} />
      </Switch>
    </>
  );
};

export default Routing;
