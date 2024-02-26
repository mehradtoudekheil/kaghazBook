import React from 'react'

import HomePopularItems from './HomePopularItems'

import heartGif from "../../assets/images/output-onlinegiftools.gif"
import { FaArrowRight } from "react-icons/fa";


function HomePopularContainer() {
  return (
        <div className='my-10 p-3 min-h-80 bg-amber-200  grid grid-cols-12'>
           
            <div className='h-full col-span-2 flex flex-col items-center justify-center'>
                <h6 className='text-gray-700 text-xl text-center'>
                     محبوب ترین  
                    <br />
                    کتاب های 
                    <br />
                    اخیر
                </h6>
                <img className='w-32 w-14' src={heartGif} alt="" />
                <button className='mt-5 text-blue-500 flex flex-row-reverse'>
                 همه   <FaArrowRight className='mt-1 ml-1'/>
                </button>
            </div>
            <div className='h-full col-span-10'>
                <HomePopularItems/>
            </div>
        </div>
  )
}

export default HomePopularContainer