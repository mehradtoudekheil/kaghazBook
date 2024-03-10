import React from 'react'

import { useContext } from 'react'
import { MyContext } from '../../context/MyContext'
import ImageMaker from "../mainComponents/ImageMaker"
import { FaShareNodes, FaRegHeart, FaHeart, FaRegBell, FaCircleCheck } from "react-icons/fa6";
import { LuShieldCheck } from "react-icons/lu";
import { PiTruckFill, PiCoinsLight } from "react-icons/pi";
import AboutBook from './AboutBook';
import StarComponents from './StarComponents';
import ProductTags from './ProductTags';
import ProductMoreOption from './ProductMoreOption';
import ProductProperty from './ProductProperty';
import ProductAddComments from './ProductAddComments';
import ProductCommentsWrapper from './ProductCommentsWrapper';


function ProductItem() {

  const info = useContext(MyContext);

  let product;


  for (let item of info.sugProducts) {
    if (item.id == info.chooseProductId) {
      product = item;
    }
  }

  let showComponents = "ABOUT";

  let component;


  const changeToAbout = () => {
    showComponents = "ABOUT";
    console.log(0);
  }

  const changeToOption = () => {
    showComponents = "OPTION";
    console.log(1);
  }

  const changeToProperty = () => {
    showComponents = "PROPERTY";
    console.log(2
    );
  }




  switch (showComponents) {
    case "ABOUT":
      component = <AboutBook />
      break;
    case "OPTION":
      component = <ProductMoreOption />
      break;
    case "PROPERTY":
      component = <ProductProperty />
      break;
    default:
      component = <AboutBook />
  }






  return (

    <div className='w-full h-auto'>
      <div className='w-full min-h-100 bg-white p-7 grid gap-3 grid-cols-10'>
        <div className='h-full p-5 col-span-10 md:col-span-7 flex flex-col md:flex-row bg-gray-50 rounded-xl'>
          <div className='w-full md:w-2/5 h-full bg-white  p-5 rounded-3xl'>
            <ImageMaker imageName={product.imageSrc} listedClass={"h-4/5 rounded-3xl w-full"} />
            <div className='h-1/5  flex items-center justify-center'>
              <FaShareNodes className='text-gray-500 text-xl mx-4' />
              <FaRegHeart className='text-gray-500 text-xl mx-4' />
              <FaRegBell className='text-gray-500 text-xl mx-4' />
            </div>
          </div>
          <div className='w-full md:w-3/5 h-full p-7'>
            <h6 className='text-emerald-800'>{product.Name}</h6>
            <ul className='mt-5'>
              <li className='flex'>
                <p className='font-bold text-gray-800 text-sm'>نویسنده : </p>
                <p className='text-gray-600 mx-2 text-xs'>{product.writer}</p>
              </li>
              <li className='flex my-4'>
                <p className='font-bold text-gray-800 text-sm'>مترجم : </p>
                <p className='text-gray-600 mx-2 text-xs'>{product.translator}</p>
              </li>
              <li className='flex my-4'>
                <p className='font-bold text-gray-800 text-sm'>انتشارات : </p>
                <p className='text-gray-600 mx-2 text-xs'>{product.brand}</p>
              </li>
              <li className='flex my-4'>
                <p className='font-bold text-gray-800 text-sm'>زبان : </p>
                <p className='text-gray-600 mx-2 text-xs'>نام انتشارات اینجا</p>
              </li>
              <li className='flex my-4'>
                <p className='font-bold text-gray-800 text-sm'>گروه سنی  : </p>
                <p className='text-gray-600 mx-2 text-xs'>دسته بندی</p>
              </li>
            </ul>
            <div className='w-full py-3 h-16 mt-10 flex flex-wrap flex-row justify-around'>

              <div className='h-full w-28 md:w-32 mb-3 md:my-0 rounded-xl bg-gray-200 flex justify-around items-center p-1 shadow'>
                <p className='text-gray-900 text-xs font-bold'>نوع جلد</p>
                <p className='text-gray-500 text-xs text-right ml-3'>شومیز</p>
              </div>

              <div className='h-full w-28 md:w-32 mb-3 md:my-0 rounded-xl bg-gray-200 flex justify-around items-center p-1 shadow'>
                <p className='text-gray-900 text-xs font-bold'>نوع کاغذ</p>
                <p className='text-gray-500 text-xs text-right ml-3'>تحریر</p>
              </div>
              <div className='h-full w-28 md:w-32 mb-3 md:my-0 rounded-xl bg-gray-200 flex justify-around items-center p-1 shadow'>
                <p className='text-gray-900 text-xs font-bold'>قطع</p>
                <p className='text-gray-500 text-xs text-right ml-3'>رقعی</p>
              </div>

            </div>
          </div>
        </div>
        <div className='h-full p-7 col-span-10 md:col-span-3 bg-gray-200 rounded-xl'>
          <div className='w-full h-full'>
            <div className='w-100 border-b border-gray-500 h-16 flex items-center justify-start'>
              <LuShieldCheck className='text-lg mb-1' />
              <p className='text-sm font-bold mr-3'>
                گارانتی اصالت و سلامت فیزیکی کالا
              </p>
            </div>
            <div className='w-100 border-b border-gray-500 h-16 flex items-center justify-start'>
              <PiTruckFill className='text-lg mb-1' />
              <p className='text-sm font-bold mr-3'>
                ارسال دو الی سه روز کاری دیگر
              </p>
            </div>
            <div className='w-full border-b border-gray-500 h-16 flex items-center justify-start'>
              <PiCoinsLight className='text-lg mb-1 text-yellow-500 ' />
              <p className='text-sm font-bold mr-3'>
                دریافت <span className='fanum'>17</span> سکه امتیاز کاغذ بوک
              </p>
            </div>
            <div className='w-full border-b border-gray-500 h-16 flex items-center justify-start'>
              <FaCircleCheck className='text-lg mb-1 ' />
              <p className='text-sm font-bold mr-3'>
                کالا موجود میباشد.
              </p>
            </div>
            <div className='w-full h-16 mt-5'>
              <div className='flex justify-between'>
                <p className='text-right font-bold'>قیمت:</p>
                <div className='flex'>
                  <p className='fanum text-left font-lg w-full ml-5'>
                    {(product.price - ((product.price * product.discuntPercent) / 100))}تومان
                  </p>
                  <p className='fanum text-left font-lg w-full line-through decoration-red-700'>{product.price}</p>
                </div>
              </div>
              <button className='bg-red-500 mt-3 rounded-xl w-full h-12 text-white'>افزودن به سبد خرید</button>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full min-h-100 bg-white p-7'>
        <div className='w-full h-full bg-gray-50 rounded-2xl'>
          <div className='h-16 w-full border-b-2'>
            <nav className='flex h-full items-center px-5'>
              <button onClick={() => changeToAbout()} className='text-gray-700 text-lg font-bold mx-2'>
                درباره کتاب
              </button>
              /
              <button onClick={() => changeToOption()} className='text-gray-400  text-lg mx-2 hover:text-gray-700 transition duration-200 hover:font-bold'>
                بررسی تخصصی تر
              </button>
              /
              <button onClick={() => changeToProperty()} className='text-gray-400  text-lg mx-2 hover:text-gray-700 transition duration-200 hover:font-bold'>
                مشخصات
              </button>
            </nav>
          </div>
          <div className='w-full min-h-80 p-7 grid grid-cols-3 gap-x-5 md:gap-y-3'>
            <div className='col-span-3 md:col-span-2 bg-white rounded-xl'>
              <AboutBook className="block" />
              {/* <ProductMoreOption className="hidden"/> */}
              {/* <ProductProperty className="hidden"/> */}
            </div>
            <div className='col-span-3 md:col-span-1 bg-white rounded-xl'>
              <div className='border-b border-gray-300 min-h-28 w-full flex items-center justify-between p-10'>
                <div className=''>
                  <h6 className='text-gray-500'>امتیاز کاربران</h6>
                </div>

                <div>
                  <StarComponents point={product.point} />
                  <p className='text-xs fanum text-center pt-2'>{product.point}</p>
                </div>

              </div>
              <div className='w-full px-10 pt-5'>
                <h6 className='text-gray-500'>برچسب ها</h6>
                <div className='flex w-full flex-wrap mt-2 pb-5 md:pb-0'>
                  <ProductTags tags={product.tags} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full min-h-120 bg-white p-7'>
        <div className='w-full h-full bg-gray-50 rounded-2xl p-10 grid grid-cols-12 gap-5'>
          <div className='h-full col-span-12 md:col-span-4 bg-white rounded-xl p-4'>
            <h6 className='font-bold text-lg text-gray-500 border-b-2 pb-2'>دیدگاه شما</h6>
            <ProductAddComments/>
          </div>
          <div className='h-full col-span-12 md:col-span-8 bg-white rounded-xl p-4'>
            <h6 className='font-bold text-lg text-gray-500 border-b-2 pb-2'>دیدگاه کاربران</h6>
            <ProductCommentsWrapper/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductItem