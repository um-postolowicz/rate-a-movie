import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/style.css";
import Details from "./pages/Details";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/details" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
