import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import scissors from '../Assets/icon-scissors.svg';
import rock from '../Assets/icon-rock.svg';
import paper from '../Assets/icon-paper.svg';
import triangle from '../Assets/bg-triangle.svg';

const Home = () => {
  const navigate = useNavigate();

  const handleUserChoice = (choice: string): void => {
    const houseChoice = getHouseChoice();
    navigate('/gamecard', { state: { userChoice: choice, houseChoice } });
  };

  const getHouseChoice = (): string => {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  };

  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="relative flex w-[1300px] h-[800px] ml-[1000px] mt-[400px]">
        <img src={triangle} alt="Triangle" className="absolute w-120 h-80" />
        <div className="relative flex justify-center items-center">
          <div className="absolute bottom-[700px] bg-blue-700 w-[210px] h-[210px] rounded-full flex justify-center items-center">
            <div className="absolute top-[1px] bg-blue-500 w-[210px] h-[200px] rounded-full flex justify-center items-center">
              <div className="absolute bottom-[100px] flex justify-center items-center bg-gray-100 w-[155px] h-[165px] rounded-full transform translate-y-1/2">
                <div className="absolute bottom-[80px] flex justify-center items-center bg-white w-[155px] h-[155px] rounded-full transform translate-y-1/2">
                  <img src={paper} alt="Paper" className="w-20 h-20 cursor-pointer" onClick={() => handleUserChoice('paper')} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute left-[70px] top-[200px] bg-red-700 w-[210px] h-[210px] z-50 rounded-full flex justify-center items-center">
            <div className="absolute top-[1px] bg-red-500 w-[210px] h-[200px] rounded-full flex justify-center items-center">
              <div className="absolute bottom-[100px] flex justify-center items-center bg-gray-100 w-[155px] h-[165px] rounded-full transform translate-y-1/2">
                <div className="absolute bottom-[80px] flex justify-center items-center bg-white w-[155px] h-[155px] rounded-full transform translate-y-1/2">
                  <img src={rock} alt="Rock" className="w-20 h-20 cursor-pointer" onClick={() => handleUserChoice('rock')} />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[-100px] left-[250px] bg-yellow-700 w-[210px] h-[210px] rounded-full flex justify-center items-center">
            <div className="absolute top-[1px] bg-yellow-500 w-[210px] h-[200px] rounded-full flex justify-center items-center">
              <div className="absolute bottom-[100px] flex justify-center items-center bg-gray-100 w-[155px] h-[165px] rounded-full transform translate-y-1/2">
                <div className="absolute bottom-[80px] flex justify-center items-center bg-white w-[155px] h-[155px] rounded-full transform translate-y-1/2">
                  <img src={scissors} alt="Scissors" className="w-20 h-20 cursor-pointer" onClick={() => handleUserChoice('scissors')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
