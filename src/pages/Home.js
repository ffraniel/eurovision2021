import { Link } from 'react-router-dom';

const Home = () => (
  <div className="">
    <h1>Nul Points 2021!</h1>
    <h3>A Eurovision 2021 Lyrics Quiz</h3>
    <h5>Guess the country from the lyrics</h5>
    <h4>How to play</h4>
    <p>You read a randomly selected section of lyrics from a randomly selected entry into Eurovision 2021 and try and guess which country the song is from.</p>
    <Link to="/game">Play</Link>
    <p>Then you can read about the artists on the <Link to="/artists">Artists page</Link></p>
  </div>
);

export default Home;