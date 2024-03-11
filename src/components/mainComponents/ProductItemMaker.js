import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import { FaBookOpen, FaCartPlus, FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ImageMaker from './ImageMaker';

function ProductItemMaker({id , pName , price , image , discunt }) {
   

    const info = useContext(MyContext);


    const sendProductId =(e)=>{
        info.chooseProductId = e.target.dataset.id;
    }

    // add to cart 

    const addToCart=(e)=>{
        info.setCartIndex(e=>e+=1)

        let choosenId = e.target.dataset.id;
        
        info.addToCartFunc(choosenId)

    }


    return (


        <div className='p-1 h-80 ' key={id}>
            <div className={`bg-white cursor-pointer rounded-lg h-full`}>

                <ImageMaker imageName={image} listedClass={"rounded-xl w-full center h-48"} />

                <h6 className='mt-3 mr-3 text-emerald-700'>{pName}</h6>
                <div className='flex flex-row-reverse items-center justify-around'>
                    <h6 className='text-center mt-2 text-red-500 fanum'>{(price - ((price * discunt) / 100))}تومان</h6>

                </div>
                <div className='w-full h-12 pb-5 rounded-br-lg rounded-bl-lg mt-1 flex items-center justify-around'>
                    <div className='group'>
                        <FaRegHeart className='text-emerald-800 text-lg transition duration-200 group-hover:hidden' />
                        <FaHeart className='text-red-600 text-xl transition duration-200 hidden group-hover:block' />
                    </div>

                    {/* <div className='group'>
                                    <Link to={"/Product"} onClick={(e) => sendProductId(e)}>
                                        <FaBookOpen className='text-emerald-800 text-lg hover:text-xl transition duration-200 hover:text-amber-800' />
                                    </Link>
                                    <span className='p-1 bottom-0 rounded-2xl bg-emerald-600 hidden group-hover:block absolute z-50 overflow-visible text-white text-xs'>
                                        مشاهده و معرفی کالا
                                    </span>
                                </div> */}
                    <Link to={"/Product"} >
                        <button type='bytton' onClick={(e) => sendProductId(e)} data-id={id} >

                            {/* <FaBookOpen className='text-emerald-800 text-lg hover:text-xl transition duration-200 hover:text-amber-800'/> */}
                            p
                        </button>
                    </Link>

                    <button type='button' onClick={(e)=>addToCart(e)}  data-id={id}>
                    {/* <FaCartPlus className='text-emerald-800 text-lg hover:text-xl transition duration-200 hover:text-amber-800 ' /> */}
                    C
                    </button>


                </div>
            </div>
        </div>

    )
}

export default ProductItemMaker