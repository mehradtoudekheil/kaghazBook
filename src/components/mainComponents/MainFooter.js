import React from 'react'
import { FaAngleLeft, FaInstagram, FaTelegram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import eNamadImg from "../../assets/images/e-namad.png"
function MainFooter() {
    return (
        <div className='min-h-120 w-full bg-emerald-800 py-10 flex flex-col items-center justify-center'>
            <div className='w-11/12 border-b-2 min-h-1/2 grid grid-cols-1 md:grid-cols-3'>
                <div className='col-span-1 h-full my-5 md:my-0'>
                    <h5 className='text-amber-300 text-2xl'>فروشگاه کاغذ بوک</h5>
                    <div className='mt-7 pr-5'>
                        <p className='text-gray-200 my-3'>تلفن : 09123568479</p>
                        <p className='text-gray-200 my-3'>تلفن : 09123568479</p>
                        <p className='text-gray-200 my-3 w-3/4'>آدرس : البرز ، کرج ، بلوار شهید موذن ، رو به روی درب اصلی دانشگاه </p>
                    </div>
                </div>
                <div className='col-span-1 h-full my-5 md:my-0'>
                    <h5 className='text-amber-300 text-xl'>دسترسی سریع تر</h5>
                    <div className='w-full h-full flex justify-around px-7 py-3'>
                        <nav className='flex flex-col'>
                            <a href="#" className='text-gray-300 my-1 flex flex-row-reverse'>لورم <FaAngleLeft className='mt-1 ml-1 text-amber-200' /></a>
                            <a href="#" className='text-gray-300 my-1 flex flex-row-reverse'>لورم <FaAngleLeft className='mt-1 ml-1 text-amber-200' /></a>
                            <a href="#" className='text-gray-300 my-1 flex flex-row-reverse'>لورم <FaAngleLeft className='mt-1 ml-1 text-amber-200' /></a>
                            <a href="#" className='text-gray-300 my-1 flex flex-row-reverse'>لورم <FaAngleLeft className='mt-1 ml-1 text-amber-200' /></a>
                            <a href="#" className='text-gray-300 my-1 flex flex-row-reverse'>لورم <FaAngleLeft className='mt-1 ml-1 text-amber-200' /></a>
                        </nav>
                        <nav className='flex flex-col'>
                            <a href="#" className='text-gray-300 my-1 flex flex-row-reverse'>لورم <FaAngleLeft className='mt-1 ml-1 text-amber-200' /></a>
                            <a href="#" className='text-gray-300 my-1 flex flex-row-reverse'>لورم <FaAngleLeft className='mt-1 ml-1 text-amber-200' /></a>
                            <a href="#" className='text-gray-300 my-1 flex flex-row-reverse'>لورم <FaAngleLeft className='mt-1 ml-1 text-amber-200' /></a>
                            <a href="#" className='text-gray-300 my-1 flex flex-row-reverse'>لورم <FaAngleLeft className='mt-1 ml-1 text-amber-200' /></a>
                            <a href="#" className='text-gray-300 my-1 flex flex-row-reverse'>لورم <FaAngleLeft className='mt-1 ml-1 text-amber-200' /></a>
                        </nav>
                    </div>
                </div>
                <div className='col-span-1 h-full my-5 md:my-0'>
                    <h5 className='text-amber-300 text-xl'>صفحات ما در فضا مجازی</h5>
                    <div className='w-full py-10 px-5 flex justify-center items-center'>
                        <div className='w-12 h-12 flex justify-center items-center rounded-full bg-white text-emerald-800 mx-2 hover:text-white hover:bg-emerald-900 transition duration-200 cursor-pointer'>
                            <FaTelegram className='text-3xl' />
                        </div>
                        <div className='w-12 h-12 flex justify-center items-center rounded-full bg-white text-emerald-800 mx-2 hover:text-white hover:bg-emerald-900 transition duration-200 cursor-pointer'>
                            <FaInstagram className='text-3xl' />
                        </div>
                        <div className='w-12 h-12 flex justify-center items-center rounded-full bg-white text-emerald-800 mx-2 hover:text-white hover:bg-emerald-900 transition duration-200 cursor-pointer'>
                            <FaWhatsapp className='text-3xl' />
                        </div>
                        <div className='w-12 h-12 flex justify-center items-center rounded-full bg-white text-emerald-800 mx-2 hover:text-white hover:bg-emerald-900 transition duration-200 cursor-pointer'>
                            <FaTwitter className='text-3xl'/>
                        </div>



                    </div>
                </div>
            </div>
            <div className='w-11/12 h-52 grid grid-cols-1 md:grid-cols-2'>
                
                <div className='col-span-1 h-full py-7 px-3'>
                    <h6 className='text-white'>برای عضویت در خبرنامه ما ایمیل خود را وارد کنید.</h6>
                    <div className='w-10/12 mt-10 bg-gray-400 rounded h-10'> 
                         <input type="email" required className='w-10/12 h-full rounded-tr rounded-br px-4 outline-0' placeholder='ایمیل...' />
                         <button className='bg-amber-400 w-2/12 h-full rounded-tl rounded-bl hover:bg-amber-600 hover:text-white transition duration-200'>عضویت</button>
                    </div>
                </div>
                <div className='col-span-1 h-full py-7 px-3 flex justify-end'>
                    <img src={eNamadImg} className='mx-5' alt="" />
                    <img src={eNamadImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainFooter