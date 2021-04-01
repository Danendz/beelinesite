import React, { Suspense } from "react";
import Nav from "./Components/Nav/Nav";
import Loading from "./Components/Loading/Loading";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TariffPage from "./Components/Tariff/Components/TariffPage/TariffPage";

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
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cabinet" exact render={() => <Cabinet />} />
            <Route path="/tariffs" exact render={() => <Tariff />} />
            <Route path="/search" exact render={() => <Search />} />
            <Route path="/help" exact render={() => <Help />} />
            <Route path="/tariffs/:id" render={()=> <TariffPage />} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
