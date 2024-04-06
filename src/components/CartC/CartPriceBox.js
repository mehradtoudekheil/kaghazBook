import React from 'react'
import { MyContext } from '../../context/MyContext';
import { useContext } from 'react';


function CartPriceBox() {

  const info = useContext(MyContext);

  let cartPrice = 0;
  let totalPrice = 0;
  let totalDiscunt = 0;

  let cartItems = info.sugProducts.filter((sugProduct) => sugProduct.addToCart == true);
  console.log(cartItems);

  for (let cartItem of cartItems) {
    let itemPrice = cartItem.price - ((cartItem.price * cartItem.discuntPercent) / 100);
        itemPrice = itemPrice * cartItem.indexQ;

    let itemDiscunt = (cartItem.price * cartItem.discuntPercent) / 100;
        itemDiscunt = itemDiscunt * cartItem.indexQ;

    totalPrice += cartItem.price * cartItem.indexQ;
    cartPrice += itemPrice;
    totalDiscunt += itemDiscunt;
  }

  // console.log(totalPrice);


  return (
    <div className='w-full p-5 shadow shadow-gray-400 min-h-96 rounded-xl flex flex-col justify-between'>

      <div className=''>
        <h6 className='text-gray-500'>مجموع خرید شما :</h6>
        <p className='text-gray-500 text-left fanum font-bold text-xl'>{totalPrice} تومان</p>
      </div>
      <div className=''>
        <h6 className='text-red-600'>مجموع سود شما :</h6>
        <p className='text-red-600 text-left fanum font-bold text-xl'>{totalDiscunt} تومان</p>
      </div>
      <div className=''>
        <h6 className='text-emerald-700'> مبلغ قابل پرداخت:</h6>
        <p className='text-emerald-700 text-left fanum font-bold text-xl'>{cartPrice} تومان</p>
      </div>
      <div className=''>
         <div className='flex mb-2'>
          <input type="checkbox" className='mx-2' />
          <p>کد تخفیف دارید؟</p>
         </div>
         <div className='w-full'>
          <input type="text" className='border-gray-400 border  rounded-lg p-2' placeholder='کد تخفیف...'/>
          <button className='bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg mx-1'>ثبت </button>
         </div>
      </div>
      <div className='w-full'>
          <button className='bg-red-500 text-white w-full py-3 text-center rounded-xl'>تائید و تکمیل سفارش</button>
      </div>
    </div>
  )
}

export default CartPriceBox