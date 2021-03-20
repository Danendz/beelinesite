import React from 'react'
import Nav from './Components/Nav/Nav'
import './App.css';
import Cabinet from './Components/Cabinet/Cabinet'
import Home from './Components/Home/Home'
import Internet_pockets from './Components/Internet_Pockets/Internet_pockets'
import Help from './Components/Help/Help'
import Tariff from './Components/Tariff/Tariff'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
    <div className="App container">
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cabinet' exact component={Cabinet} />
          <Route path='/internet_pockets' exact component={Internet_pockets} />
          <Route path='/help' exact component={Help} />
          <Route path='/tariffs' exact component={Tariff} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
