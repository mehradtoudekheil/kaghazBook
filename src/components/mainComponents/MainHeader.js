import React from 'react'
import { FaSearch , FaShoppingCart , FaBell , FaRegUser   } from "react-icons/fa";
import MainMenu from './MainMenu';

function MainHeader() {
  return (
  <div className='navigation'>
      <div className=' w-full grid grid-cols-11 p-5 border'>
      <div className=' col-span-5 md:col-span-2 pr-6 flex items-center'>
        <h1 className='text-emerald-700 text-3xl'>
          کاغذ
          <span>Book</span>
        </h1>
      </div>
      <div className='md:col-span-7 p-1 hidden md:flex justify-center'>
        <div className='w-9/12 grid grid-cols-12 border-2 rounded-xl'>
          <input type="text" placeholder='نام کتاب را جستجو کنید: ' className='p-2 col-span-11 rounded-tr-md rounded-br-md outline-0' />
          <button className='p-2 col-span-1 text-emerald-700 rounded-tl-md rounded-bl-md flex justify-center items-center hover:text-yellow-100'>
            <FaSearch />
          </button>
        </div>
      </div>
      <div className=' col-span-6 md:col-span-2 p-1 flex justify-end md:justify-center'>
        <div className='w-3/4 md:w-2/3 h-full p-1 bg-white border-2 border-r-2 border-b-2 border-emerald-700 rounded-tl-xl rounded-br-xl flex items-center justify-around'>
        <FaBell className='text-emerald-700 cursor-pointer text-lg hover:text-yellow-300'/>
          <FaShoppingCart className='text-emerald-700 cursor-pointer text-lg hover:text-yellow-300'/>
          <FaRegUser className='text-emerald-700 cursor-pointer text-lg hover:text-yellow-300'/>
        </div>
      </div>
    </div>
    <MainMenu/>
  </div>
  )
}

export default MainHeader