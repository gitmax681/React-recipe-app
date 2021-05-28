import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Recipes from "./components/Recipes";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/index.css";
import NutrientsTable from "./components/NutrientsTable";

const data = {USD: {label: "dollar", quantity: 75.23432342, unit:"$"}}

ReactDOM.render(
  <div id="foo">
    <Router>
      <App />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/table" exact render={() => (
        <NutrientsTable nutrients={data} />
        )} />
        <Route path="/search/:q" exact component={Recipes} />
      </Switch>
    </Router>
  </div>,
  document.getElementById("root")
);
