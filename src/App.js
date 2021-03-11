import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import LandingPage from './Pages/LandingPage/LandingPage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/homepage">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
