import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Game from './pages/Game';
// import Leaderboard from './pages/Leaderboard';
import Artists from './pages/Artists';
import logo from './images/eurovision_logo_main.svg';

export default function App() {

  return (
    <div className="min-h-screen">
      <div>
        <Router>
          <header className="flex w-full bg-blue-900">
            <NavLink to="/" className="block bg-blue-900 w-32">
              <img className="object-contain h-24 w-full" src={logo} alt="Eurovision 2021 logo" />
            </NavLink>
            <ul class="ml-auto mr-2 mt-4 px-2 grid grid-cols-2 sm:flex w-full text-gray-100 max-w-xs md:max-w-none md:mt-8 md:text-lg justify-end lg:mr-12 xl:text-xl">
              <li class="text-right md:font-bold sm:mx-2">
                <NavLink className="hover:text-green-300" exact activeClassName="text-green-500" to="/">Home</NavLink>
              </li>
              <li class="text-right md:font-bold sm:mx-2">
                <NavLink className="hover:text-green-300" activeClassName="text-green-500" to="/game">Game</NavLink>
              </li>
              {/* <li class="text-right sm:mx-2">
                <NavLink className="hover:text-green-300" activeClassName="text-green-500" to="/leaderboard">
                  Leaderboard
                </NavLink>
              </li> */}
              <li class="text-right md:font-bold sm:mx-2">
                <NavLink className="hover:text-green-300" activeClassName="text-green-500" to="/artists">Artists</NavLink>
              </li>
            </ul>
          </header>
          <Switch>
            <Route path="/game">
              <Game />
            </Route>
            {/* <Route path="/leaderboard">
              <Leaderboard />
            </Route> */}
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
