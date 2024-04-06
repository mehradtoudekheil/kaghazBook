import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import { FaShoppingBasket ,FaTrash  } from "react-icons/fa";
import ImageMaker from '../mainComponents/ImageMaker';

function CartProducts() {

    const info = useContext(MyContext);

    let cartList = info.sugProducts.filter((sugProduct) => sugProduct.addToCart == true);

    console.log(cartList);

    return (
        <div className='w-full p-5 shadow shadow-gray-400 min-h-40 rounded-xl'>
            <h3 className='font-bold text-xl pr-3'>سبد خرید شما</h3>
            <div className='w-full'>
                {cartList.length < 1 ? <div className='h-80 w-full flex items-center justify-center flex-col'>
                    <FaShoppingBasket className='text-6xl text-slate-400 mt-4' />
                    <h6 className='text-slate-500 text-xl mt-5'>سبد خرید شما خالی است.</h6>
                </div> :
                    <div className='mt-5'>
                        {cartList.map(item => {
                            return <div className='w-full md:w-3/4 grid grid-cols-4 md:grid-cols-9 h-32 border border-gray-300 rounded-xl my-5'>
                                <div className='col-span-1 md:col-span-2 rounded-xl'>
                                    <ImageMaker imageName={item.imageSrc} listedClass={"w-full h-28 rounded-xl"} />
                                </div>
                                <div className='col-span-3 flex justify-between md:col-span-7 border-r font-bold'>
                                    <div>
                                        <p className='p-3'>{item.Name}</p>
                                        <p className='text-gray-500 font-bold text-xs pr-3'>{item.writer}</p>
                                        <p className='text-gray-500 font-bold text-xs pr-3 mt-3'>{item.translator}</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='font-bold text-lg text-gray-700 fanum'>{(item.price - ((item.price * item.discuntPercent) / 100))}تومان </p>
                                    </div>
                                    <div className='p-3 flex flex-col items-center justify-between'>
                                        <div className='hidden md:block'>
                                            <button className='bg-green-500 text-white w-5 rounded-sm mx-1'>+</button>
                                            <input type="number" value={item.indexQ} className='border w-8 text-left rounded-lg fanum' />
                                            <button className='bg-red-500 text-white w-5 rounded-sm mx-1'>-</button>
                                        </div>
                                        <button className='hidden mfd:blockborder border-1 border-red-500 text-red-400 text-sm p-2 rounded-xl hover:text-white hover:bg-red-500 transition duration-300'>حذف از سبد خرید</button>
                                        <button className='block md:hidden'>
                                            <FaTrash className='text-red-500 text-lg'/>
                                        </button>
                                        <input type="number" value={item.indexQ} className='border w-8 text-center rounded-lg fanum' />
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>}
            </div>
        </div>
    )
}

export default CartProducts