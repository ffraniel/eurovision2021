import {useState, useEffect} from 'react';
import LeaderboardElement from '../components/LeaderboardElement';

const ResultsElement = ({points, numberOfRounds, resetGame}) => {

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

  const [leaders, setLeaders] = useState(tempLeaders);
  const [userName, setUserName] = useState('');
  const [hasSubmittedName, setHasSubmittedName] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    let allLeaders = [{
      name: userName,
      score: points,
      date: '18/05/21',
      numberOfRounds: numberOfRounds,
      thisUser: true
    }, ...leaders];
    let sortedLeaders = allLeaders.sort((a, b)=>{
      return b.score - a.score;
    });
    setHasSubmittedName(true);
    
    setLeaders(sortedLeaders)
  }

  useEffect(()=>{
    console.log("Submit results to database here! - ", points);
  }, [])

  return (
    <div className="text-gray-100 text-center">
      <h3 className="text-3xl md-text-4xl">You scored {points}!</h3>
      {/* <p className="mt-4" >See how you ranked!</p>
      {!hasSubmittedName &&
        <form className="mt-2" onSubmit={handleSubmit} >
          <input className="text-gray-800 px-2 py-1 rounded-sm" type="text" name="name" placeholder="name" value={userName} onChange={(e => {setUserName(e.target.value)})} />
          <input className="inline-block bg-gray-800 text-gray-100 px-2 py-1 rounded-sm" type="submit" value="Submit" />
        </form>
      }
      <LeaderboardElement leaders={leaders} numberOfRounds={numberOfRounds} /> */}
      <button className="bg-red-500 hover:bg-red-400 px-2 py-1 text-gray-100 rounded-md mx-1 my-6" onClick={resetGame}>Restart</button>
    </div>
  );
}

export default ResultsElement;