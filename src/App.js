import React, { Suspense } from "react";
import Nav from "./Components/Nav/Nav";
import LoadingHome from "./Components/Home/LoadingHome";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Cabinet = React.lazy(() => import("./Components/Cabinet/Cabinet"));
const Home = React.lazy(() => import("./Components/Home/Home"));
const Search = React.lazy(() => import("./Components/Search/Search"));
const Help = React.lazy(() => import("./Components/Help/Help"));
const Tariff = React.lazy(() => import("./Components/Tariff/Tariff"));

function App() {
  return (
    <Router>
      <Nav />

      <div className="App container">
        <Switch>
          <Suspense fallback={<LoadingHome />}>
            <Route path="/" exact render={() => <Home />} />
          </Suspense>
          <Suspense fallback={<span>cabinet...</span>}>
            <Route path="/cabinet" exact render={() => <Cabinet />} />
          </Suspense>
          <Suspense fallback={<span>cabinet...</span>}>
            <Route path="/search" exact render={() => <Search />} />
          </Suspense>
          <Suspense fallback={<span>cabinet...</span>}>
            <Route path="/help" exact render={() => <Help />} />
          </Suspense>
          <Suspense fallback={<span>cabinet...</span>}>
            <Route path="/tariffs" exact render={() => <Tariff />} />
          </Suspense>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
