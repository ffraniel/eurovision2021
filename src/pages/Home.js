import { Link } from 'react-router-dom';
import circleLogo from '../images/eurovision_circle.svg';

const Home = () => (
  <div className="container my-0 mx-auto py-10">
    <h1 className="text-center text-3xl md:text-5xl text-gray-100">Nul Points 2021!</h1>
    <figure className="mx-auto h-30 mt-4">
      <img className="mx-auto object-contain h-full" src={circleLogo} alt="Circular Eurovision alternative logo" />
    </figure>
    <h3 className="text-center text-xl md:text-3xl mt-2 text-gray-100">A Eurovision 2021 Lyrics Quiz</h3>
    <h5 className="text-center text-lg md:text-xl mt-2 text-gray-100">Guess the country from the lyrics</h5>
    <h4 className="text-center text-xl md:text-3xl mt-4 text-gray-100">How to play</h4>
    <p className="mx-auto text-center text-md md:text-lg mt-2 text-gray-100 max-w-lg">You read a randomly selected section of lyrics from a randomly selected entry into Eurovision 2021 and try and guess which country the song is from.</p>
    <div className="text-center my-4">
      <Link className=" py-2 px-4 rounded-sm bg-green-500 text-gray-100 hover:bg-green-400 transition-colors" to="/game">Play</Link>
    </div>
    <p className="text-center mt-2 text-gray-100">Then you can read about the artists on the <Link to="/artists">Artists page</Link></p>
  </div>
);

export default Home;