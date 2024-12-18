import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';

function MenuItem({catCode}) {

    const info = useContext(MyContext);

    let data = [] 

    info.category.map((item)=>{
        if( item.id == catCode){
            data = item.value
        }
    })

    console.log(data);


  return (
    <div className='flex justify-around'>
    <div className='flex flex-col justify-around h-40'>
           {
            data.map((item ,index)=>{
                return <Link key={index} to={"/"} className='text-gray-500 text-sm text-rigth hover:text-emerald-700 hover:font-bold cursor-pointer'>{item}</Link>
            })
           }
    </div>
</div>
  )
}

export default MenuItem