import React, { Suspense } from "react";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Tariff from './Components/Tariff/Tariff'
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Cabinet = React.lazy(() => import("./Components/Cabinet/Cabinet"));

const Search = React.lazy(() => import("./Components/Search/Search"));
const Help = React.lazy(() => import("./Components/Help/Help"));
/* const Tariff = React.lazy(() => import("./Components/Tariff/Tariff")); */

function App() {
  return (
    <Router>
      <Nav />

      <div className="App container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Suspense fallback={<span>...</span>}>
            <Route path="/cabinet" exact render={() => <Cabinet />} />
            <Route path="/tariffs" exact render={() => <Tariff />} />
            <Route path="/search" exact render={() => <Search />} />
            <Route path="/help" exact render={() => <Help />} />
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
