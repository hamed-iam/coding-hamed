import './App.css';
import { useEffect } from 'react';
import Homepage from './Pages/Homepage/Homepage';
import LandingPage from './Pages/LandingPage/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

const url = 'https://v2.jokeapi.dev/joke/Any';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/homepage">
          <Homepage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
