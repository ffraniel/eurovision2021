import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const ResultsElement = ({points, numberOfRounds, resetGame}) => {

  useEffect(()=>{
    console.log("Submit results to database here! - ", points);
  }, [])

  const handleRestart = (e) => {
    e.preventDefault();
    resetGame();
  };

  return (
    <>
      <h3>Results: you scored {points} / {numberOfRounds}</h3>
      <p>See the table for 5 question games</p>
      <button className="bg-red-400 rounded-md px-2 py-1" onClick={handleRestart}>Restart</button>
      <Link to="/">Home</Link>
    </>
  );
}

export default ResultsElement;