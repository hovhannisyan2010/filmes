import React from 'react'

// setTimeout(() => {
//     console.log("Hello, World!");
//   }, 2000);
function Loading() {
    return (
        <div className='w-full h-screen bg-black fixed z-50 text-white top-0 flex justify-center items-center text-[30px]'>
            Loading...
        </div>
    )
}

export default Loading