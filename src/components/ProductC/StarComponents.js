import React from 'react'
import { FaRegStar, FaStar,FaStarHalfAlt } from 'react-icons/fa';

function StarComponents({ point }) {

    // console.log(typeof(point));
    let myPoint = point;
        console.log(myPoint);
    let stars;
    console.log(1<myPoint && myPoint<1.9);

    switch (true) {
        case 0.1 < myPoint && myPoint <0.9:
            stars = <div className='flex flex-row-reverse'> <FaStarHalfAlt  className='text-yellow-400'/> <FaRegStar  className='text-gray-300'/> <FaRegStar  className='text-gray-300'/><FaRegStar  className='text-gray-300'/> <FaRegStar  className='text-gray-300'/></div>
            break;
        case myPoint == 1:
            stars = <div className='flex flex-row-reverse'> <FaStar  className='text-yellow-400'/> <FaRegStar  className='text-gray-300'/> <FaRegStar  className='text-gray-300'/><FaRegStar  className='text-gray-300'/> <FaRegStar  className='text-gray-300'/></div>
            break;
        case 1 < myPoint && myPoint < 1.9:
            stars = <div className='flex flex-row-reverse'> <FaStar  className='text-yellow-400'/> <FaStarHalfAlt  className='text-yellow-400'/> <FaRegStar  className='text-gray-300'/><FaRegStar  className='text-gray-300'/> <FaRegStar  className='text-gray-300'/></div>
            break;
        case myPoint == 2:
            stars = <div className='flex flex-row-reverse'> <FaStar  className='text-yellow-400'/> <FaStar  className='text-yellow-400'/> <FaRegStar className='text-gray-300' /><FaRegStar className='text-gray-300'/> <FaRegStar className='text-gray-300'/></div>
        case 2 < myPoint && myPoint < 2.9:
            stars = <div className='flex flex-row-reverse'> <FaStar  className='text-yellow-400'/> <FaStar  className='text-yellow-400'/> <FaStarHalfAlt  className='text-yellow-400'/><FaRegStar  className='text-gray-300'/> <FaRegStar  className='text-gray-300'/></div>
            break;
        case myPoint == 3:
            stars = <div className='flex flex-row-reverse'> <FaStar  className='text-yellow-400'/> <FaStar  className='text-yellow-400'/> <FaStar className='text-yellow-400' /><FaRegStar className='text-gray-300' /> <FaRegStar className='text-gray-300' /></div>
            break;
        case 3 < myPoint && myPoint < 3.9:
            stars = <div className='flex flex-row-reverse'> <FaStar  className='text-yellow-400'/> <FaStar  className='text-yellow-400'/> <FaStar className='text-yellow-400' /><FaStarHalfAlt className='text-yellow-400' /> <FaRegStar  className='text-gray-300'/></div>
            break;
        case myPoint == 4:
            stars = <div className='flex flex-row-reverse'> <FaStar className='text-yellow-400'/> <FaStar className='text-yellow-400'/> <FaStar className='text-yellow-400'/><FaStar className='text-yellow-400'/> <FaRegStar  className='text-gray-300'/></div>
            break;
        case 4 < myPoint && myPoint < 4.9:
            stars = <div className='flex flex-row-reverse text-yellow-400'> <FaStar /> <FaStar /> <FaStar /><FaStar /> <FaStarHalfAlt /></div>
            break;
        case myPoint == 5:
            stars = <div className='flex flex-row-reverse text-yellow-400'> <FaStar /> <FaStar /> <FaStar /><FaStar /> <FaStar /></div>
            break;
            default:
            stars = <div className='flex flex-row-reverse text-gray-400'> <FaRegStar /> <FaRegStar /> <FaRegStar /><FaRegStar /> <FaRegStar /></div>


    }


    return (
        <>
            {stars}

        </>

    )
}

export default StarComponents