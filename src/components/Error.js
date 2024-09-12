import React from 'react'
import { AiOutlineFrown } from "react-icons/ai";

function Error() {
  return (
    <div className='w-full flex flex-col items-center pt-48 gap-7'>
      <AiOutlineFrown className="text-[200px]" />
      <h1 className="text-[100px]">this Page is not found</h1>
    </div>
  )
}

export default Error
