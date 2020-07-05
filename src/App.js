import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Pokedex } from './components/Pokedex';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Pokedex} />
          <Route exact path="/pokemon/:id" component={Pokedex} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
