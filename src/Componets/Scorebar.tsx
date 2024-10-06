import React, { useEffect, useState } from 'react';

type ScorebarProps = {
  result: string | null;
};

const Scorebar: React.FC<ScorebarProps> = ({ result }) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (result === 'You Win') {
      setScore((prevScore) => prevScore + 1);
    } else if (result === 'You Lose') {
      setScore((prevScore) => (prevScore > 0 ? prevScore - 1 : 0));
    }
  }, [result]);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md flex justify-between items-center">
      <h2 className="text-2xl font-bold">Score</h2>
      <div className="text-2xl">{score}</div>
    </div>
  );
};

export default Scorebar;
