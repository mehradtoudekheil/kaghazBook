import React from 'react'

// import components
import ProductItem from '../components/ProductC/ProductItem';
import MainHeader from '../components/mainComponents/MainHeader';
import MainFooter from '../components/mainComponents/MainFooter';

function Product() {
  return (
    <div>
      <MainHeader/>
      <ProductItem/>
      <MainFooter/>
    </div>
    
  )
}

export default Product