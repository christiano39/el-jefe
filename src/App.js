import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Menu from './components/Menu';
import Locations from './components/Locations';
import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path='/menu'>
          <Menu />
        </Route>

        <Route path='/locations'>
          <Locations />
        </Route>

        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
