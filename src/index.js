import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Recipes from "./components/Recipes";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './css/index.css';

ReactDOM.render(
  <div id="foo">
    <Router>
      <App />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/search/:q" exact component={Recipes} />
        </Switch>
      </Router>
    </div>,
  document.getElementById("root")
);
