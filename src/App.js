import React from "react";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";

const Cabinet = loadable(() => import("./Components/Cabinet/Cabinet"));

const Search = loadable(() =>
  import("./Components/Search/Search")
);
const Help = loadable(() => import("./Components/Help/Help"));
const Tariff = loadable(() => import("./Components/Tariff/Tariff"));

function App() {
  return (
    <Router>
      <Nav />
      <div className="App container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cabinet" exact component={Cabinet} />
          <Route path="/search" exact component={Search} />
          <Route path="/help" exact component={Help} />
          <Route path="/tariffs" exact component={Tariff} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
