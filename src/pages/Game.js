import React, { useState, useEffect } from "react";
import rawArtistData from '../data/artistData';
import questionCreator from '../utility/questionCreator';
import QuestionsElement from '../components/QuestionsElement';
import ResultsElement from '../components/ResultsElement';

const Game = () => {

  const [numberOfRounds, setNumberOfRounds] = useState(null);
  const [round, setRound] = useState(0);
  const [points, setPoints] = useState(0);
  const [questionList, setQuestionList] = useState(null);

  useEffect(()=>{

  }, [])

  const nextRound = (e) => {
    e.preventDefault();
    setRound(currentRound => currentRound + 1);
  };

  const resetGame = (e) => {
    e.preventDefault();
    setNumberOfRounds(null);
    setRound(0);
    setQuestionList(null);
  }

  const handleSetRounds = (number) => {
    setNumberOfRounds(number);
    setQuestionList(questionCreator(number, rawArtistData));
  }

  return (
    <section className="container">
      {!numberOfRounds && 
      
        <div>
          <h3 >How Many rounds?</h3>
          <div className="flex">
            <button className="bg-green-400 px-2 py-1 text-gray-100 rounded-md mx-1 w-12" onClick={()=>{handleSetRounds(5)}}>5</button>
            <button className="bg-green-400 px-2 py-1 text-gray-100 rounded-md mx-1 w-12" onClick={()=>{handleSetRounds(10)}}>10</button>
            <button className="bg-green-400 px-2 py-1 text-gray-100 rounded-md mx-1 w-12" onClick={()=>{handleSetRounds(15)}}>15</button>
          </div>
        </div>
      }
      {
        numberOfRounds && questionList && round < numberOfRounds &&
        <QuestionsElement 
          questionList={questionList}
          numberOfRounds={numberOfRounds}
          round={round}
          setRound={setRound}
          points={points}
          setPoints={setPoints}
          resetGame={resetGame}
        />
      }
      {round ===numberOfRounds &&
        <ResultsElement numberOfRounds={numberOfRounds} points={points} resetGame={resetGame} />
      }
    </section>
  );
}

export default Game;