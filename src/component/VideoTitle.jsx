import React from 'react'
import { FaPlay } from "react-icons/fa";
import { SlInfo } from "react-icons/sl";


function VideoTitle({ title, overview }) {
  return (
    <div className='pt-42 px-5 md:px-15 w-full aspect-video absolute bg-gradient-to-r from-black text-white '>
      <h1 className='text-xl -mt-33 md:mt-0 md:text-5xl font-bold w-2/4 '>{title}</h1> 
      <p className='py-6 hidden md:block text-lg w-1/4'>{overview.slice(0,290)}</p>
      <div className='flex md:flex-row md flex-col gap-2'>
        <button className='bg-white text-black my-auto hover:bg-gray-300 w-15 md:px-6 md:py-2 cursor-pointer border flex items-center text-center justify-center gap-1  rounded-lg'>
          <FaPlay />Play</button>
        <button className='bg-gray-400 hover:bg-gray-500 text-white font-bold w-fit md:px-6 md:py-2  cursor-pointer border flex items-center text-center justify-center gap-1 opacity-75 rounded-lg'><SlInfo className='h-5 w-5 font-bold' /> More Info</button>
      </div>
    </div>

  )
}

export default VideoTitle