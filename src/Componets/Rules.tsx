import React, { useState } from 'react';
import rules from '../Assets/image-rules.svg';

import { IoMdClose } from "react-icons/io";
const Rules = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={togglePopup}
        className="fixed bottom-5 right-5 w-28 bg-[#1f3756] text-1xl ring-2 ring-white ring-opacity-50  text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Rules
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={togglePopup}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            
          
            <div className="bg-white w-[400px] h-[400px] p-6 rounded-lg shadow-lg">
            <div className='flex justify-between'> <h1>Rules</h1>
                
            <button
                onClick={togglePopup}
                className=" text-gray-400 px-4 py-2 rounded-full hover:bg-red-600 focus:outline-none"
              >
                <IoMdClose size={30} />
              
              </button>
              </div>
                <img src={rules} alt="" />
           
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Rules;
