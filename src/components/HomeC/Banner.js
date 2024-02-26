import React from 'react'

import slide1 from "../../assets/images/slider/slider1.jpg";
import slide2 from "../../assets/images/slider/slider2.jpg";
import slide3 from "../../assets/images/slider/slider5.gif";

function Banner() {
    return (
        <div className='w-full min-h-120 p-5 grid grid-cols-1  md:grid-cols-3 grid-gap-2 mb-10 md:mb-0'>

            <div className='col-span-1 h-full md:col-span-2 p-3'>
                <div className='w-full h-full'>
                    <img src={slide3} className='rounded-xl w-full h-full' alt="" />
                </div>
            </div>

            <div className='col-span-1 h-full p-3'>
                <div className='h-1/2'>
                    <img src={slide1} className='rounded-xl w-full h-full pb-2' alt="" />
                </div>
                <div className='h-1/2 pt-2'>
                    <img src={slide2} className='rounded-xl w-full h-full' alt="" />
                </div>
            </div>

        </div>
    )
}

export default Banner