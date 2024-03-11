import React from 'react'

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import ProductItemMaker from '../mainComponents/ProductItemMaker';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 5 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 4,
        slidesToSlide: 4 // optional, default to 1.
    },
    phablet: {
        breakpoint: { max: 768, min: 464 },
        items: 2,
        slidesToSlide: 2  // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};





function HomeSugItems() {

    const info = useContext(MyContext);

    const sendProductId = (e) => {
        info.chooseProductId = e.target.dataset.id;
    }


    return (
        <Carousel responsive={responsive} rtl={true} className="h-full">
             {
             info.sugProducts.length > 0 && info.sugProducts.map((item) => {
                return <ProductItemMaker key={item.id} id={item.id} image={item.imageSrc} price={item.price} pName={item.Name} discunt={item.discuntPercent}/>
             })
           }
        </Carousel>
    )
}

export default HomeSugItems