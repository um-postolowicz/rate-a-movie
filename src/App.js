import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/style.css";
import Details from "./pages/Details";
import MainPage from "./pages/MainPage";
import MoviesList from "./pages/MoviesList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/:searchValue" component={MoviesList} />
        {/* <Route path="/:searchValue/:id" component={Details} /> */}
      </Switch>
    </Router>
  );
}

export default App;
