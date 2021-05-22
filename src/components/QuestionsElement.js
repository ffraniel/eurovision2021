import {useState, useEffect} from 'react';
import snippetGenerator from '../utility/snippetGenerator';
import getAlternativeAnswers from '../utility/getAlternativeAnswers';
import randomise from '../utility/randomise';
import songList from '../data/artistData.json';
import Images from './Images';

const QuestionsElement = ({questionList, numberOfRounds, round, setRound, resetGame, points, setPoints}) => {

  const [loading, setLoading] = useState(false);
  const [currentQuestionList, setCurrentQuestionList] = useState(null);
  const [snippet, setSnippet] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [givenAnswer, setGivenAnswer] = useState(null);
  const [timeTaken, setTimeTaken] = useState(null);
  const [counter, setCounter] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [pointsThisRound, setPointsThisRound] = useState(null);

  let answerCountry = questionList[round].country;

  useEffect(()=>{
    setLoading(true);
    setSnippet(snippetGenerator(questionList[round].lyrics));
    let fourOptions = randomise([questionList[round], ...getAlternativeAnswers(songList, answerCountry)]);
    setCurrentQuestionList(fourOptions);
    setLoading(false);
  }, [round, answerCountry, questionList]);


  // Third Attempts
  useEffect(() => {
    var timer;
    if (!hasAnswered) {
      setTimeout(() => setCounter(counter + 1), 1000);
    } 

    return () => clearInterval(timer);
  }, [counter]);

  const nextQuestion = (e) => {
    e.preventDefault();
    setRound(prevRound => prevRound + 1);
    setHasAnswered(false);
    setGivenAnswer(null);
    setCounter(0);
    setStartTime(Date.now());
    setPointsThisRound(0);
  }

  const handleAnswer = (choice) => {
    if (!hasAnswered) {
      setHasAnswered(true);

      setGivenAnswer(choice);

      let timerDuration = Date.now() - startTime;
      setTimeTaken(timerDuration / 1000);

      let pointsThisRoundCalc = 10000 - timerDuration > 0 ? 11000 - timerDuration: 1000;
      console.log(pointsThisRoundCalc);
      if (choice.country === questionList[round].country) {
        setPointsThisRound(pointsThisRoundCalc);
        setPoints(prevPoints => prevPoints + pointsThisRoundCalc);
      }
    }
  }

  const hasAnsweredMessage = () => {
    return (
      <div className="">
        <h1 className={`${questionList[round].country === givenAnswer.country ? 
          'text-green-600' : 
          ' text-red-600'} 
          text-3xl font-extrabold`}>
          {questionList[round].country === givenAnswer.country ? 
            'CORRECT!!!' : 
            `WRONG!!!!`}
        </h1>
        <h3 className="my-4">
          <img className="inline mx-2" src={questionList[round].lilFlag} alt={questionList[round].country + "'s flag"} />
          It was {questionList[round].country}!
          <img className="inline mx-2" src={questionList[round].lilFlag} alt={questionList[round].country + "'s flag"} />
        </h3>
        <Images src={questionList[round].artistImg} alt={questionList[round].country} classNames={'object-cover w-1/2 mx-auto'} />
      </div>
      );
  }

  return (
    <div className="text-center text-gray-100">
      <h3 className="text-gray-100 text-xl" >Round {round + 1} of {numberOfRounds}</h3>
      <h4 className="mt-2 text-xl">Score 
        <span className="text-red-500 font-bold"> {points}</span>
      </h4>
      {hasAnswered && pointsThisRound && <h3>++ {pointsThisRound} points</h3>}
      {!hasAnswered && <h5>Time {counter}</h5>}
      {hasAnswered && <h5>Time {timeTaken}</h5>}
      {loading && <h1>LOADING!!</h1>}

      {!loading && currentQuestionList && snippet.length > 0 &&
      <div className="mt-4">
        <h3 className="max-w-lg mx-auto px-4">...{snippet}....</h3>
        <div className="py-4">
          {hasAnswered && hasAnsweredMessage()}
        </div>
        <div className="flex md:w-1/2 mx-auto">
        {currentQuestionList.map(option => {
            return (
              <button 
                disabled={hasAnswered} 
                className={`${hasAnswered ? 
                  'bg-gray-400' : 
                  'bg-green-500 hover:bg-green-400'} 
                  px-2 py-2 text-gray-100 rounded-md mx-1 leading-tight w-1/4  md:w-1/2`}
                onClick={(e)=>{
                  e.preventDefault();
                  handleAnswer(option);
                }}>
                  {option.country}
              </button>
            );
        })
        }
        </div>
        <div className="mx-auto my-4">
          <button className="bg-red-500 hover:bg-red-400 px-2 py-1 text-gray-100 rounded-md mx-1" onClick={resetGame}>Restart</button>
          {hasAnswered && <button className="bg-green-500 hover:bg-green-400 px-2 py-1 text-gray-100 rounded-md mx-1 w-1/2" onClick={nextQuestion}>Next</button>}
        </div>
      </div>
      }

    </div>
  );
};

export default QuestionsElement;