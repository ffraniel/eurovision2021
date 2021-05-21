import {useState, useEffect} from 'react';
import snippetGenerator from '../utility/snippetGenerator';
import getAlternativeAnswers from '../utility/getAlternativeAnswers';
import randomise from '../utility/randomise';
import songList from '../data/artistData.json';

const QuestionsElement = ({questionList, numberOfRounds, round, setRound, resetGame, points, setPoints}) => {

  const [loading, setLoading] = useState(false);
  const [currentQuestionList, setCurrentQuestionList] = useState(null);
  const [snippet, setSnippet] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [givenAnswer, setGivenAnswer] = useState(null);

  let answerCountry = questionList[round].country;

  useEffect(()=>{
    setLoading(true);
    setSnippet(snippetGenerator(questionList[round].lyrics));
    let fourOptions = randomise([questionList[round], ...getAlternativeAnswers(songList, answerCountry)]);
    setCurrentQuestionList(fourOptions);
    setLoading(false);
  }, [round])

  const nextQuestion = (e) => {
    e.preventDefault();
    setRound(prevRound => prevRound + 1);
    setHasAnswered(false);
    setGivenAnswer(null);
  }

  const handleAnswer = (choice) => {
    console.log("has answered? ", hasAnswered)
    if (!hasAnswered) {
      setHasAnswered(true);
      setGivenAnswer(choice);
      if (choice.country === questionList[round].country) {
        setPoints(prevPoints => prevPoints + 1);
      }
    }
  }

  const hasAnsweredMessage = () => {
    return (
      <h1 className={`${questionList[round].country === givenAnswer.country ? 'text-green-500' : ' text-red-500'} text-2xl`}>
        {questionList[round].country === givenAnswer.country ? 
          'CORRECT!!!' : 
          `WRONG, sorry, it was ${questionList[round].country}!`}
      </h1>
      );
  }

  return (
    <div className="text-center text-gray-100">
      <h3 className="text-gray-100 text-xl" >Round {round + 1} of {numberOfRounds}</h3>
      <h4 className="mt-2 text-xl">Points 
        <span className="text-red-400 "> {points}</span>
      </h4>
      <h5>Time {}</h5>
      {loading && <h1>LOADING!!</h1>}

      {!loading && currentQuestionList && snippet.length > 0 &&
      <div className="mt-4">
        <h3 className="max-w-lg mx-auto">...{snippet}....</h3>
        <div className="h-24">
          {hasAnswered && hasAnsweredMessage()}
        </div>
        <div className="flex w-1/2 mx-auto">
        {currentQuestionList.map(option => {
            return (
              <button 
                disabled={hasAnswered} 
                className={`${hasAnswered ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-400'} px-2 py-1 text-gray-100 rounded-md mx-1 leading-tight w-1/2`}
                onClick={(e)=>{
                  e.preventDefault();
                  handleAnswer(option);
                }}>
                  {option.country} {questionList[round].country === option.country ? '*': ''}
              </button>
            );
        })
        }
        </div>
        <div className="flex w-1/2 mx-auto my-4">
          <button className="bg-red-500 hover:bg-red-400 px-2 py-1 text-gray-100 rounded-md mx-1" onClick={resetGame}>Restart</button>
          {hasAnswered && <button className="bg-green-500 hover:bg-green-400 px-2 py-1 text-gray-100 rounded-md mx-1 w-1/2" onClick={nextQuestion}>Next</button>}
        </div>
      </div>
      }

    </div>
  );
};

export default QuestionsElement;