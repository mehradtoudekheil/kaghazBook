import React from 'react'
import {FaBars , FaSearch} from "react-icons/fa";
import { Link } from 'react-router-dom';


function MainMenu() {
    return (
        <div className='w-full border-b bg-emerald-700 h-10'>
            <div className='flex md:hidden justify-between h-full items-center px-5'> 
                <FaBars className='text-xl text-white hover:text-emerald-400'/>
                <FaSearch className='text-xl text-white hover:text-emerald-400'/> 
            </div>
            <nav className='hidden md:flex  h-full items-center'>
               <div className='relative group'>
                <FaBars className='text-white mx-3 cursor-pointer'/>
                <div className='w-screen h-72 bg-white p-3 absolute top-7 block group-hover:block'>
                    <div className='grid grid-cols-2 gap-4 py-3 px-4 w-full h-full '>
                        <div className='col-span-1 h-full shadow inner-shadow shadow-gray-400 rounded-xl'>
                            <h6 className='text-gray-800 text-lg font-bold py-3 px-4'>دسته بندی ها</h6>
                            <div className='flex justify-around'>
                                <div className='flex flex-col justify-around h-40'>
                                    <p className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>شعر و ادبیات</p>
                                    <p className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>فلسفه</p>
                                    <p className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>روانشناسی</p>
                                    <p className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>علوم اجتماعی</p>
                                </div>
                                <div className='flex flex-col justify-between'>
                                    <p className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>دینی</p>
                                    <p className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>زندگی نامه</p>
                                    <p className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>تاریخ</p>
                                    <p className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>جغرافیا</p>
                                </div>
                                <div className='flex flex-col justify-between'>
                                    <p className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>علوم کاربردی</p>
                                    <p className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>زبان خارجی</p>
                                    <p className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>لوازم التحریر</p>
                                    <p className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 h-full shadow inner-shadow shadow-gray-400 rounded-xl'></div>
                    </div>
                </div>
               </div>
                <Link to={"/"} className='text-white mx-3'>صفحه اصلی</Link>                
                <Link to={"/"} className='text-white mx-3'>محصولات</Link>                
                <Link to={"/"} className='text-white mx-3'>درباره ما</Link>                
                <Link to={"/"} className='text-white mx-3'>ارتباط با ما</Link>                
            </nav>
        </div>
    )
}

export default MainMenu