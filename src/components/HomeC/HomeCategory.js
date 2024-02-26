import React from 'react'

// import images 
import bookImg from "../../assets/images/cat/icons8-book-50.png";
import chemistryImg from "../../assets/images/cat/icons8-chemistry-50.png";
import childrenImg from "../../assets/images/cat/icons8-children-50.png";
import historyImg from "../../assets/images/cat/icons8-history-50.png";
import pencilImg from "../../assets/images/cat/icons8-pencil-50.png";
import stationeryImg from "../../assets/images/cat/icons8-stationery-50.png";
import writerImg from "../../assets/images/cat/icons8-writer-50.png";
import yinyangImg from "../../assets/images/cat/icons8-yin-yang-64.png";
import mosqueImg from "../../assets/images/cat/icons8-mosque-50.png";
import languageImg from "../../assets/images/cat/icons8-language-50.png";

function HomeCategory() {
  return (
    <div className='min-h-60 bg-amber-200 w-full p-5'> 
      <h4 className='text-gray-600 text-center'>دسته بندی ها</h4>
      <div className='w-full grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-x-4 pt-5'>
        <div className='col-span-1 h-36 flex flex-col justify-around items-center'>
          <img src={bookImg} width={"70px"} height={"70px"} alt="" />
        <a href="#" className='text-gray-700 font-bold hover:text-gray-500 transition duration-200'>شعر و ادبیات</a>
        </div>
        <div className='col-span-1 h-36 flex flex-col justify-around items-center'>
          <img src={chemistryImg} width={"70px"} height={"70px"} alt="" />
        <a href="#" className='text-gray-700 font-bold hover:text-gray-500 transition duration-200'>علوم کاربردی</a>
        </div>
        <div className='col-span-1 h-36 flex flex-col justify-around items-center'>
          <img src={childrenImg} width={"70px"} height={"70px"} alt="" />
          <a href="#" className='text-gray-700 font-bold hover:text-gray-500 transition duration-200'>کودک و نوجوان</a>
        </div>
        <div className='col-span-1 h-36 flex flex-col justify-around items-center'>
          <img src={historyImg} width={"70px"} height={"70px"} alt="" />
          <a href="#" className='text-gray-700 font-bold hover:text-gray-500 transition duration-200'>تاریخ و جغرافیا</a>
        </div>
        <div className='col-span-1 h-36 flex flex-col justify-around items-center'>
          <img src={writerImg} width={"70px"} height={"70px"} alt="" />
          <a href="#" className='text-gray-700 font-bold hover:text-gray-500 transition duration-200'>زندگی نامه</a>
        </div>
        <div className='col-span-1 h-36 flex flex-col justify-around items-center'>
          <img src={yinyangImg} width={"70px"} height={"70px"} alt="" />
          <a href="#" className='text-gray-700 font-bold hover:text-gray-500 transition duration-200 text-center'>فلسفه, روانشناسی</a>
        </div>
        <div className='col-span-1 h-36 hidden md:block lg:hidden'>

        </div>
        <div className='col-span-1 h-36 flex flex-col justify-around items-center'>
          <img src={languageImg} width={"70px"} height={"70px"} alt="" />
          <a href="#" className='text-gray-700 font-bold hover:text-gray-500 transition duration-200'>زبان خارجی</a>
        </div>
        <div className='col-span-1 h-36 flex flex-col justify-around items-center'>
          <img src={mosqueImg} width={"70px"} height={"70px"} alt="" />
          <a href="#" className='text-gray-700 font-bold hover:text-gray-500 transition duration-200'>کتب دینی</a>
        </div>
        <div className='col-span-1 h-36 flex flex-col justify-around items-center'>
          <img src={bookImg} width={"70px"} height={"70px"} alt="" />
          <a href="#" className='text-gray-700 font-bold hover:text-gray-500 transition duration-200'>علوم اجتماعی</a>
        </div>
        <div className='col-span-1 h-36 flex flex-col justify-around items-center '>
          <img src={stationeryImg} width={"70px"} height={"70px"} alt="" />
          <a href="#" className='text-gray-700 font-bold hover:text-gray-500 transition duration-200'>لوازم تحریر</a>
        </div>
       
      </div>
    </div>
  )
}

export default HomeCategory