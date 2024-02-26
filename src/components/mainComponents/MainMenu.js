import React from 'react'
import {FaBars , FaSearch} from "react-icons/fa";

function MainMenu() {
    return (
        <div className='w-full border-b bg-emerald-700 h-10'>
            <div className='flex md:hidden justify-between h-full items-center px-5'> 
                <FaBars className='text-xl text-white hover:text-emerald-400'/>
                <FaSearch className='text-xl text-white hover:text-emerald-400'/> 
            </div>
            <nav className='hidden md:flex  h-full items-center'>
                <a href="#" className='text-white mx-3'>صفحه اصلی</a>
                <a href="#" className='text-white mx-3'>کتاب ها</a>
                <a href="#" className='text-white mx-3'>درباره ما</a>
                <a href="#" className='text-white mx-3'>ارتباط با ما</a>
            </nav>
        </div>
    )
}

export default MainMenu