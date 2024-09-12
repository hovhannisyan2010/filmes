import React from 'react'
import { AiOutlineFrown } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className='w-full flex flex-col items-center pt-48 gap-7'>
      <AiOutlineFrown className="text-[200px]" />
      <button className='px-4 py-3 border-solid border-[2px] border-white'><Link to={"/"}>Home</Link></button>
    </div>
  )
}

export default Error
