



const LeaderboardElement = ({leaders, numberOfRounds}) => {
  return (
    <div className="mx-auto">
    <ol className="">
      {leaders.map((leader, i) => { 
        return (
          <li className="flex rounded-full bg-gray-200 shadow-xl p-4 my-10">
            <p className="text-xl text-gray-700 ml-2">{i + 1}</p>
            <p className="text-xl text-gray-800 mx-auto">{leader.name}</p>
            <p className="text-xl text-gray-700 mx-auto">{leader.score} / {numberOfRounds}</p>
            <span className="py-1 px-2 text-xs bg-gray-800 text-gray-100 rounded-full">{leader.date}</span>
          </li>
        );
      })}
    </ol>
  </div>
  )
}

export default LeaderboardElement;