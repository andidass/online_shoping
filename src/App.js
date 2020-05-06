import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

function App() {
  const Hats = () => (
    <div>
      <h1>HATS</h1>
    </div>
  );

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shop/hats' exact component={Hats} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
