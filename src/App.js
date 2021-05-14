import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
import Leaderboard from './pages/Leaderboard';
import Artists from './pages/Artists';

export default function App() {

  return (
    <div>
      <h1>Eurovision 2021</h1>
      <div>
        <Router>
          <ul class="flex bg-green-500">
            <li class="mx-auto">
              <Link to="/">Home</Link>
            </li>
            <li class="mx-auto">
              <Link to="/game">Game</Link>
            </li>
            <li class="mx-auto">
              <Link to="/leaderboard">
                Leaderboard
              </Link>
            </li>
            <li class="mx-auto">
              <Link to="/artists">Artists</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/leaderboard">
              <Leaderboard />
            </Route>
            <Route path="/artists">
              <Artists />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
