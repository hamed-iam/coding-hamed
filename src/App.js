import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import LandingPage from './Pages/LandingPage/LandingPage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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
