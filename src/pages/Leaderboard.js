import React, { useState, useEffect } from "react";
import LeaderboardElement from '../components/LeaderboardElement';

const Leaderboard = () => { 

  const tempLeaders = [{
    name: "bob24242",
    score: 8,
    date: '17/05/21'
  }, {
    name: "elena",
    score: 3.,
    date: "17/05/21"
  }, {
    name: "larry",
    score: 2,
    date: "17/05/21"
    }
  ];

  const [whichQuiz, setWhichQuiz] = useState(5);
  const [leaders, setLeaders] = useState(tempLeaders)

  useEffect(()=>{
    console.log("make fetch with ", whichQuiz);

  }, [whichQuiz]);

  const changeWhichQuiz = (range) => {

    setWhichQuiz(range);
  }; 

  return (
    <div className="container px-12 mx-auto text-gray-100 my-4">
      <h1 className="text-2xl">Leaderboard</h1>
      <h4 className="mt-2">Showing Results for {whichQuiz} Question Quizes</h4>
      <select className="text-black text-xl mt-2" value={whichQuiz} onChange={e => changeWhichQuiz(e.target.value)}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      <LeaderboardElement leaders={leaders} numberOfRounds={whichQuiz}/>
    </div>
  );
}
export default Leaderboard;