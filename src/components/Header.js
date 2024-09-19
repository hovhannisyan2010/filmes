import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className='w-full h-[110px] bg-black text-white flex justify-between p-[20px] items-center '>
      <Link to={"/"}><img src='https://images-platform.99static.com//EskCilKtJVmrH1l5zmU2gZ78cig=/0x0:1200x1200/fit-in/500x500/99designs-contests-attachments/135/135981/attachment_135981288' className='w-[200px] h-[110px] bg-cover' /></Link>
      <Link to={"/"} className='py-[10px] px-[19px] border-[1px] bg-black text-white'>Home</Link>
    </header>
  )
}

export default Header
