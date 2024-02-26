import React from 'react'

import ablahImg from "../../assets/images/products/ablah.webp";
import { FaStar , FaPizzaSlice } from "react-icons/fa";

function Slider() {
    return (
        <div className='w-full h-110 flex justify-center items-center mt-7'>
            <div className='w-10/12 h-100 rounded-xl test grid grid-cols-2 bg-white relative'>
                <div className='flex absolute top-3 right-8 '>
                <h5 className='text-emerald-700 text-xl'>یک برش کتاب</h5>
                <FaPizzaSlice className='text-amber-500 mr-2 mt-1'/>
                </div>
                <div className='col-span-2 md:col-span-1 p-4'>
                    <div className="w-full h-full flex justify-center items-center">
                        <div className='w-72 bg-white h-72 border-l-2 border-b-2 border-emerald-700 shadow-inner rounded-bl-xl p-5 rounded-tr-xl'>
                            <p className='text-justify'>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                .تون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربای موجود طراحی است
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 md:col-span-1 p-4'>
                    <div className=' w-full h-full flex items-center justify-end relative'>
                        <img src={ablahImg} className='w-96 h-92 absolute' alt="" />
                        <div className='border-2 border-emerald-700 rounded-tr-xl border-l-0 rounded-br-xl absolute top-40 left-80 w-52 h-36 p-4'>
                            <div className='w-full flex justify-between'>
                                <h6 className='text-amber-700 hover:text-amber-400 cursor-pointer duration-200 transition'>ابله</h6>
                                    <span className='flex'>
                                        <p className='text-xs mt-1 ml-0.5 text-yellow-400'>4.5</p>
                                    <FaStar className='text-yellow-400'/>
                                    </span>
                            </div>
                            <p className='text-emerald-700 hover:text-emerald-500 cursor-pointer py-1'>فئودور داستایفسکی</p>
                            <p className='text-emerald-700 hover:text-emerald-500 cursor-pointer py-1'>انتشارات : قطره</p>
                            <p className='text-emerald-700 hover:text-emerald-500 cursor-pointer py-1'>مترجم : سروش حبیبی</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider