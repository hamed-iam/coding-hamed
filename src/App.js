import './App.css';
import { useEffect } from 'react';
import Homepage from './Pages/Homepage/Homepage';
import LandingPage from './Pages/LandingPage/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

const url = 'https://v2.jokeapi.dev/joke/Any';

const fetchData = async () => {
  try {
    const { setup, delivery } = await axios.get(url);

    return { setup, delivery };
  } catch (error) {
    console.log(error);
  }
};

function App() {
  useEffect(() => {
    async function fetchData() {
      const { setup, delivery } = await axios.get(url);

      console.log(setup, delivery);
      return { setup, delivery };
    }
    fetchData();
  }, []);

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
