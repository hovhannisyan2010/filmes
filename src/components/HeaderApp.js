import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMenu } from "react-icons/md";
function HeaderApp() {
    return (
        <header className='w-full h-[110px] bg-black text-white flex justify-between items-center'>
            <Link to={"/"}><img src='https://images-platform.99static.com//EskCilKtJVmrH1l5zmU2gZ78cig=/0x0:1200x1200/fit-in/500x500/99designs-contests-attachments/135/135981/attachment_135981288' className='w-[200px] h-[110px] bg-cover' /></Link>
        </header>
    )
}

export default HeaderApp