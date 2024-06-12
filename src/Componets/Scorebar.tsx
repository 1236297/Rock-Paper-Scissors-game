import React from 'react'
import logo from '../Assets/logo.svg';
const Scorebar = () => {
  return (
    <>
       <div className='bg-opacity-100 ml-[100px]  w-[900px] content-start mt-[50px] ring-2 ring-white ring-opacity-50 rounded-md flex'>

         <div><img src={logo} alt="logo" className='w-[200px] m-[20px] '/></div>
       
         <div className='bg-white rounded-md w-[160px] h-[160px] ml-[400px] m-[20px]'>
         <div className=' text-[#3e52a3] font-bold ml-[50px] mt-3 '>
         SCORE
         </div>
         <div className=' text-8xl  ml-[50px] w-[100px] h-[120px] text-[#3b4363] mt-0 '>0</div>
         </div>
      

         </div>

    </>
  )
}

export default Scorebar