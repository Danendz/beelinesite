import React from "react";
import Nav from "./Components/Nav/Nav";
<<<<<<< HEAD
import Home from './Components/Home/Home';
=======
import Home from "./Components/Home/Home";
>>>>>>> parent of 448807c (asd)
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import loadable from "@loadable/component";

<<<<<<< HEAD
const Cabinet = React.lazy(() => import("./Components/Cabinet/Cabinet"));

const Search = React.lazy(() => import("./Components/Search/Search"));
const Help = React.lazy(() => import("./Components/Help/Help"));
const Tariff = React.lazy(() => import("./Components/Tariff/Tariff"));
=======
const Cabinet = loadable(() => import("./Components/Cabinet/Cabinet"));

const Search = loadable(() =>
  import("./Components/Search/Search")
);
const Help = loadable(() => import("./Components/Help/Help"));
const Tariff = loadable(() => import("./Components/Tariff/Tariff"));
>>>>>>> parent of 448807c (asd)

function App() {
  return (
    <Router>
      <Nav />
      <div className="App container">
        <Switch>
<<<<<<< HEAD

            <Route path="/" exact component={Home} />
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
=======
          <Route path="/" exact component={Home} />
          <Route path="/cabinet" exact component={Cabinet} />
          <Route path="/search" exact component={Search} />
          <Route path="/help" exact component={Help} />
          <Route path="/tariffs" exact component={Tariff} />
>>>>>>> parent of 448807c (asd)
        </Switch>
      </div>
    </Router>
  );
}

export default App;
