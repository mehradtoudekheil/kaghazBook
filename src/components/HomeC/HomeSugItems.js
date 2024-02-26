import React from 'react'

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import { FaBookOpen , FaCartPlus , FaRegHeart , FaHeart  } from "react-icons/fa";

import ablah from "../../assets/images/products/ablah.webp"

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 5 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    phablet: {
        breakpoint: { max: 768, min: 464 },
        items: 2,
        slidesToSlide: 2  // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};





function HomeSugItems() {

    const info = useContext(MyContext);




  return (
    <Carousel responsive={responsive} rtl={true} className="h-full">
            {
               info.sugProducts.length > 0 && info.sugProducts.map((item) => {
                    return <div className='p-1 h-80' key={item.id}>
                        <div className={`bg-white cursor-pointer rounded-lg h-full`}>
                            <img  src={ablah} className="rounded-xl w-full center h-48 bg-red-200" alt=""/>
                            <h6 className='mt-3 mr-3 text-emerald-700'>{item.Name}</h6>
                            <div className='flex flex-row-reverse items-center justify-around'>
                                <h6 className='text-center mt-2 text-red-500 fanum'>{(item.price - ((item.price * item.discuntPercent) / 100))}تومان</h6>
                                <p className='text-gray-500 line-through decoration-red-600 text-xs fanum'>{item.price}تومان</p>
                            </div>
                           <div className='w-full h-12 rounded-br-lg rounded-bl-lg mt-1 flex items-center justify-around'>
                           <div className='group'>
               <FaRegHeart className='text-emerald-800 text-lg transition duration-200 group-hover:hidden'/>
               <FaHeart className='text-red-600 text-xl transition duration-200 hidden group-hover:block'/>
               </div>
                          
                            <FaBookOpen className='text-emerald-800 text-lg hover:text-xl transition duration-200 hover:text-amber-800'/>
                            <FaCartPlus className='text-emerald-800 text-lg hover:text-xl transition duration-200 hover:text-amber-800 '/>

                           </div>
                        </div>
                    </div>
                })
            }
        </Carousel>
  )
}

export default HomeSugItems