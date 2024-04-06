import React from 'react'
import MainHeader from '../components/mainComponents/MainHeader'
import CartPriceBox from '../components/CartC/CartPriceBox'
import CartProducts from '../components/CartC/CartProducts'
import MainFooter from '../components/mainComponents/MainFooter'

export default function CartPage() {
  return (
    <div>
      <MainHeader />
      <div className='w-full min-h-96 py-10 px-3'>
        <div className='grid grid-cols-12 gap-4 h-full p-3'>
          <div className='col-span-12 md:col-span-8 h-full'>
          <CartProducts />
          </div>
          <div className='col-span-12 md:col-span-4 h-full'>
            <CartPriceBox />
          </div>
        </div>
      </div>
      <MainFooter/>
    </div>
  )
}
