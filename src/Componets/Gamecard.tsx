import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import paper from '../Assets/icon-paper.svg';
import rock from '../Assets/icon-rock.svg';
import scissors from '../Assets/icon-scissors.svg';

type GamecardProps = {
  setResult: (result: string | null) => void;
};

const Gamecard: React.FC<GamecardProps> = ({ setResult }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userChoice, houseChoice } = location.state as { userChoice: string, houseChoice: string };

  const [showHouseChoice, setShowHouseChoice] = useState(false);
  const [showBlinkingCircles, setShowBlinkingCircles] = useState(false);

  useEffect(() => {
    const houseChoiceTimer = setTimeout(() => {
      setShowHouseChoice(true);
      determineResult();
    }, 4000); // 4 seconds delay for house choice

    const blinkingCirclesTimer = setTimeout(() => {
      setShowBlinkingCircles(true);
    }, 5000); // 1 second delay after house choice icon appears

    return () => {
      clearTimeout(houseChoiceTimer);
      clearTimeout(blinkingCirclesTimer);
    };
  }, []);

  const determineResult = () => {
    if (userChoice === houseChoice) {
      setResult('It\'s a Tie');
    } else if (
      (userChoice === 'rock' && houseChoice === 'scissors') ||
      (userChoice === 'scissors' && houseChoice === 'paper') ||
      (userChoice === 'paper' && houseChoice === 'rock')
    ) {
      setResult('You Win');
    } else {
      setResult('You Lose');
    }
  };

  const choiceToImage = (choice: string): string => {
    if (choice === 'rock') return rock;
    if (choice === 'paper') return paper;
    if (choice === 'scissors') return scissors;
    return '';
  };

  const handlePlayAgain = (): void => {
    setResult(null);
    navigate('/');
  };

  const getColorForBackground = (choice: string): string => {
    switch (choice) {
      case 'rock':
        return 'bg-red-700';
      case 'paper':
        return 'bg-blue-700';
      case 'scissors':
        return 'bg-yellow-700';
      default:
        return 'bg-gray-700';
    }
  };

  const getLighterColorForBackground = (choice: string): string => {
    switch (choice) {
      case 'rock':
        return 'bg-red-500';
      case 'paper':
        return 'bg-blue-500';
      case 'scissors':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const isWinningChoice = (choice: string): boolean => {
    if (userChoice === 'rock' && houseChoice === 'scissors') return userChoice === choice;
    if (userChoice === 'scissors' && houseChoice === 'paper') return userChoice === choice;
    if (userChoice === 'paper' && houseChoice === 'rock') return userChoice === choice;
    return houseChoice === choice;
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-screen bg-[#1f3756]">
      <div className="grid grid-cols-3 gap-10 w-full max-w-4xl mt-10">
        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ x: 0 }}
            animate={showHouseChoice ? { x: -200 } : { x: 0 }}
            transition={{ duration: 1 }}
            className="text-white font-bold text-4xl mb-8"
          >
            You Picked
          </motion.h1>
          <motion.div
            initial={{ x: 0 }}
            animate={showHouseChoice ? { x: -200 } : { x: 0 }}
            transition={{ duration: 1 }}
            className={` ${getColorForBackground(userChoice)} w-[410px] h-[410px] rounded-full flex justify-center items-center`}
          >
            {isWinningChoice(userChoice) && showBlinkingCircles && (
              <>
                <div className="absolute w-[610px] h-[610px] rounded-full bg-white opacity-20 animate-pulse"></div>
                <div className="absolute w-[760px] h-[760px] rounded-full bg-white opacity-10 animate-pulse"></div>
                <div className="absolute w-[950px] h-[950px] rounded-full bg-white opacity-10 animate-pulse"></div>
              </>
            )}
            <div className={` w-[410px] h-[400px] rounded-full flex justify-center items-center ${getLighterColorForBackground(userChoice)}`}>
              <div className="flex justify-center items-center bg-gray-100 w-[310px] h-[330px] rounded-full">
                <div className="flex justify-center items-center bg-white w-[310px] h-[310px] rounded-full">
                  <img src={choiceToImage(userChoice)} alt={userChoice} className="w-20 h-20" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center">
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white font-bold text-4xl mb-8"
            >
              {result}
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-red-500 text-white px-32 py-4 rounded-sm hover:bg-red-600 focus:outline-none"
          >
            <button onClick={handlePlayAgain}>
              Play Again
            </button>
          </motion.div>
        </div>

        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ x: 0 }}
            animate={showHouseChoice ? { x: 200 } : { x: 0 }}
            transition={{ duration: 1 }}
            className="text-white font-bold text-4xl mb-8"
          >
            The House Picked
          </motion.h1>
          <motion.div
            initial={{ x: 0 }}
            animate={showHouseChoice ? { x: 200 } : { x: 0 }}
            transition={{ duration: 1 }}
            className={` ${showHouseChoice ? getColorForBackground(houseChoice) : 'bg-opacity-0'} w-[410px] h-[410px] rounded-full flex justify-center items-center`}
          >
            {showHouseChoice && (
              <>
                {isWinningChoice(houseChoice) && showBlinkingCircles && (
                  <>
                    <div className="absolute w-[610px] h-[610px] rounded-full bg-white opacity-20 animate-pulse"></div>
                    <div className="absolute w-[760px] h-[760px] rounded-full bg-white opacity-10 animate-pulse"></div>
                    <div className="absolute w-[950px] h-[950px] rounded-full bg-white opacity-10 animate-pulse"></div>
                  </>
                )}
                <div className={` ${showHouseChoice ? getLighterColorForBackground(houseChoice) : 'bg-opacity-0'} w-[410px] h-[400px] rounded-full flex justify-center items-center`}>
                  <div className={`flex justify-center items-center ${showHouseChoice ? 'bg-gray-100' : 'bg-gray-700'} w-[310px] h-[330px] rounded-full`}>
                    <div className={`flex justify-center items-center ${showHouseChoice ? 'bg-white' : 'bg-gray-700'} w-[310px] h-[310px] rounded-full`}>
                      {showHouseChoice ? (
                        <img src={choiceToImage(houseChoice)} alt={houseChoice} className="w-20 h-20" />
                      ) : null}
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gamecard;
