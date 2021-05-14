import React, { useState, useEffect } from "react";

const Leaderboard = () => { 

  const [whichQuiz, setWhichQuiz] = useState(5);

  useEffect(()=>{
    console.log("make fetch with ", whichQuiz);

  }, [whichQuiz]);

  const changeWhichQuiz = (range) => {

    setWhichQuiz(range);
  }; 

  return (
    <div className="">
      <h3>Leaderboard</h3>
      <h4>Showing Results for {whichQuiz} Question Quizes</h4>
      <select value={whichQuiz} onChange={e => changeWhichQuiz(e.target.value)}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      <div className="">
        <div className="flex">
            <span>name</span>
            <span>score</span>
            <span>date</span>
        </div>
        <ul className="">
          <li className="flex">
            <span>Tony 1</span>
            <span>3</span>
            <span>12/05/21</span>
          </li>
          <li className="flex">
            <span>Linda</span>
            <span>2</span>
            <span>03/05/21</span>
          </li>
          <li className="flex">
            <span>Roger</span>
            <span>8</span>
            <span>14/05/21</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Leaderboard;