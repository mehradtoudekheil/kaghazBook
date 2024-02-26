import React from 'react';

import boxImg from "../../assets/images/box.webp"
import HomeSugItems from './HomeSugItems';
import { FaArrowRight } from "react-icons/fa";

const HomeSuggestProductsContainer = () => {
    return (
        <div className='my-10 p-3 min-h-80 bg-emerald-800  grid grid-cols-12'>
           
            <div className='h-full col-span-2 flex flex-col items-center justify-center'>
                <h6 className='text-white text-center'>
                    پیشنهاد 
                    <br />
                    شگفت 
                    <br />
                    انگیز
                </h6>
                <img className='w-32' src={boxImg} alt="" />
                <button className='mt-5 text-blue-500 flex flex-row-reverse'>
                 همه   <FaArrowRight className='mt-1 ml-1'/>
                </button>
            </div>
            <div className='h-full col-span-10'>
                <HomeSugItems/>
            </div>
        </div>
    );
};

export default HomeSuggestProductsContainer;