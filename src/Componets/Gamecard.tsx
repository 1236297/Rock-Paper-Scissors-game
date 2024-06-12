import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import paper from '../Assets/icon-paper.svg';
import rock from '../Assets/icon-rock.svg';
import scissors from '../Assets/icon-scissors.svg';

const Gamecard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userChoice, houseChoice } = location.state as { userChoice: string, houseChoice: string };

  const [showHouseChoice, setShowHouseChoice] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHouseChoice(true);
    }, 4000); // 4 seconds delay
    return () => clearTimeout(timer);
  }, []);

  const choiceToImage = (choice: string): string => {
    if (choice === 'rock') return rock;
    if (choice === 'paper') return paper;
    if (choice === 'scissors') return scissors;
    return '';
  };

  const handlePlayAgain = (): void => {
    navigate('/');
  };

  // Function to determine the main background color based on the user's choice
  const getColorForBackground = (choice: string): string => {
    switch (choice) {
      case 'rock':
        return 'bg-red-700'; // Red background for rock
      case 'paper':
        return 'bg-blue-700'; // Blue background for paper
      case 'scissors':
        return 'bg-yellow-700'; // Yellow background for scissors
      default:
        return 'bg-gray-700'; // Default background
    }
  };

  // Function to determine the lighter background color based on the user's choice
  const getLighterColorForBackground = (choice: string): string => {
    switch (choice) {
      case 'rock':
        return 'bg-red-500'; // Lighter red background for rock
      case 'paper':
        return 'bg-blue-500'; // Lighter blue background for paper
      case 'scissors':
        return 'bg-yellow-500'; // Lighter yellow background for scissors
      default:
        return 'bg-gray-500'; // Default lighter background
    }
  };

  // Function to determine if the choice is the winning choice
  const isWinningChoice = (choice: string): boolean => {
    // Add logic to determine if the choice is the winning choice
    // This is a placeholder implementation; you need to replace it with actual game logic
    if (userChoice === 'rock' && houseChoice === 'scissors') return userChoice === choice;
    if (userChoice === 'scissors' && houseChoice === 'paper') return userChoice === choice;
    if (userChoice === 'paper' && houseChoice === 'rock') return userChoice === choice;
    return houseChoice === choice;
  };

  return (
    <>
      <div className="relative flex justify-center items-center mr-[1440px] h-screen bg-[#1f3756]">
        <div>
          <h1 className="absolute text-white font-bold text-4xl left-[350px] top-[80px] animate-slide-in-left">You Picked</h1>
          <h1 className="absolute text-white font-bold text-4xl left-[850px] top-[80px] animate-slide-in-right">The House Picked</h1>

          <div className={`absolute left-[260px] top-[200px] ${getColorForBackground(userChoice)} w-[410px] h-[410px] rounded-full flex justify-center items-center animate-fade-in`}>
            {isWinningChoice(userChoice) && (
              <>
                <div className="absolute w-[610px] h-[610px] rounded-full bg-white opacity-20 animate-pulse"></div>
                <div className="absolute w-[760px] h-[760px] rounded-full bg-white opacity-10 animate-pulse"></div>
                <div className="absolute w-[950px] h-[950px] rounded-full bg-white opacity-10 animate-pulse"></div>
              </>
            )}
            <div className={`absolute bottom-[10px] w-[410px] h-[400px] rounded-full flex justify-center items-center ${getLighterColorForBackground(userChoice)}`}>
              <div className="absolute bottom-[200px] flex justify-center items-center bg-gray-100 w-[310px] h-[330px] rounded-full transform translate-y-1/2">
                <div className="absolute bottom-[155px] flex justify-center items-center bg-white w-[310px] h-[310px] rounded-full transform translate-y-1/2">
                  <img src={choiceToImage(userChoice)} alt={userChoice} className="w-20 h-20" />
                </div>
              </div>
            </div>
          </div>

          <div className={`absolute left-[850px] top-[200px] ${showHouseChoice ? getColorForBackground(houseChoice) : 'bg-opacity-0 '} w-[410px] h-[410px] rounded-full flex justify-center items-center animate-fade-in`}>
            {isWinningChoice(houseChoice) && (
              <>
                <div className="absolute w-[610px] h-[610px] rounded-full bg-white opacity-20 animate-pulse"></div>
                <div className="absolute w-[760px] h-[760px] rounded-full bg-white opacity-10 animate-pulse"></div>
                <div className="absolute w-[950px] h-[950px] rounded-full bg-white opacity-10 animate-pulse"></div>
              </>
            )}
            <div className={`absolute bottom-[10px] ${showHouseChoice ? getLighterColorForBackground(houseChoice) : 'bg-opacity-0'} w-[410px] h-[400px] rounded-full flex justify-center items-center`}>
              <div className={`absolute bottom-[200px] flex justify-center items-center ${showHouseChoice ? 'bg-gray-100' : 'bg-gray-700'} w-[310px] h-[330px] rounded-full transform translate-y-1/2`}>
                <div className={`absolute bottom-[155px] flex justify-center items-center ${showHouseChoice ? 'bg-white' : 'bg-gray-700'} w-[310px] h-[310px] rounded-full transform translate-y-1/2`}>
                  {showHouseChoice ? (
                    <img src={choiceToImage(houseChoice)} alt={houseChoice} className="w-20 h-20" />
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-[50%] top-[300px] transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none animate-slide-up">
            <button onClick={handlePlayAgain}>
              Play Again
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gamecard;
