//@ts-check

import React from 'react'
import {FaBars , FaSearch} from "react-icons/fa";
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import { useState } from 'react';


function MainMenu() {

     const [catCode , setCatCode] = useState(null);

    const checkCat = (e)=>{
        setCatCode(e.target.dataset.code)
    }

    return (
        <div className='w-full border-b bg-emerald-700 h-10'>
            <div className='flex md:hidden justify-between h-full items-center px-5'> 
                <FaBars className='text-xl text-white hover:text-emerald-400'/>
                <FaSearch className='text-xl text-white hover:text-emerald-400'/> 
            </div>
            <nav className='hidden md:flex h-full items-center'>
               <div className='relative group'>
                <FaBars className='text-white mx-3 cursor-pointer'/>
                <div className='w-screen h-72 bg-white p-3 absolute top-7 block group-hover:block'>
                    <div className='grid grid-cols-2 gap-4 py-3 px-4 w-full h-full '>
                        <div className='col-span-1 h-full shadow inner-shadow shadow-gray-400 rounded-xl'>
                            <h6 className='text-gray-800 text-lg font-bold py-3 px-4'>دسته بندی ها</h6>
                            <div className='flex justify-around'>
                                <div className='flex flex-col justify-around h-40'>
                                    <p  onClick={(e)=>checkCat(e)} data-code="1" className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>شعر و ادبیات</p>
                                    <p  onClick={(e)=>checkCat(e)} data-code="2" className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>فلسفه</p>
                                    <p  onClick={(e)=>checkCat(e)} data-code="3" className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>روانشناسی</p>
                                    <p  onClick={(e)=>checkCat(e)} data-code="4" className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>علوم اجتماعی</p>
                                </div>
                                <div className='flex flex-col justify-between'>
                                    <p  onClick={(e)=>checkCat(e)} data-code="5" className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>دینی</p>
                                    <p onClick={(e)=>checkCat(e)} data-code="6" className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>زندگی نامه</p>
                                    <p onClick={(e)=>checkCat(e)} data-code="7" className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>تاریخ</p>
                                    <p onClick={(e)=>checkCat(e)} data-code="8" className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>جغرافیا</p>
                                </div>
                                <div className='flex flex-col justify-between'>
                                    <p onClick={(e)=>checkCat(e)} data-code="9" className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>علوم کاربردی</p>
                                    <p onClick={(e)=>checkCat(e)} data-code="10" className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>زبان خارجی</p>
                                    <p onClick={(e)=>checkCat(e)} data-code="11" className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>لوازم التحریر</p>
                                    <p onClick={(e)=>checkCat(e)} data-code="12" className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 h-full shadow inner-shadow shadow-gray-400 rounded-xl'>
                            <MenuItem catCode={catCode}/>
                        </div>
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