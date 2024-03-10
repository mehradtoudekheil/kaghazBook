import React from 'react'
import { FaRegStar, FaStar,FaStarHalfAlt } from 'react-icons/fa';
import { RiErrorWarningLine } from "react-icons/ri";

function ProductAddComments() {
  return (
    <div className='w-full p-3 bg-white pt-10'>

      <p className='text-gray-500 text-sm'>هنوز امتیازی برای این محصول ثبت نشده.</p>
      <div className='flex mt-4'>
        <FaStar className='text-gray-400 mx-0.5'/>
        <FaStar className='text-gray-400 mx-0.5'/>
        <FaStar className='text-gray-400 mx-0.5'/>
        <FaStar className='text-gray-400 mx-0.5'/>
        <FaStar className='text-gray-400 mx-0.5'/>
      </div>
      <p className='text-sm mt-7 font-bold text-gray-700'>شما هم میتوانید برای این محصول دیدگاه ثبت کنید</p>
      <button className='w-full border-2 border-red-400 py-2 font-bold rounded-xl text-red-400 mt-10 hover:bg-red-400 hover:text-white transition duration-300' >ثبت دیدگاه</button>
      <div className='w-full mt-6 flex'> 
        <RiErrorWarningLine className='mt-0.5 text-red-600'/>
        <p className='text-gray-500 text-sm mr-1'>برای ثبت دیدگاه باید  وارد شوید</p>
      </div>
    </div>
  )
}

export default ProductAddComments