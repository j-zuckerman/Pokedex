import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Pokedex } from './components/Pokedex';
import { Pokemon } from './components/Pokemon';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Pokedex} />
          <Route exact path="/pokemon/:id" component={Pokemon} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
