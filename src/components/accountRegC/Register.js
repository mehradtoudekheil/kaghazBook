import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../../context/MyContext'


function Register() {

    let info = useContext(MyContext)

    const changeReg = ()=>{
        info.setSignStatus(false);
    }

  return (
    <div className='w-96 h-96 bg-white rounded-xl test p-4'>
        <h4 className='text-lg font-bold text-emerald-700 text-center mt-5'>ثبت نام در کاغذ بوک</h4>
        <form className='w-full p-3 mt-4'>
            <input type="text" placeholder='نام : ' className='p-2 rounded-xl w-full border outline-yellow-200'/>
            <input type="text" placeholder='نام خانوادگی : ' className='p-2 rounded-xl w-full border outline-y
            ellow-200 my-3'/>
            <input type="text" placeholder='ایمیل یا تلفن :' className='p-2 rounded-xl w-full border outline-yellow-200'/>
            <button className='w-full p-2 bg-emerald-500 hover:bg-emerald-700 transition duration-300 my-3 rounded-xl font-bold text-white'>ثبت نام</button>
        </form>
        <button onClick={changeReg} className='font-bold text-center text-red-400 hover:text-red-700 transition duration-200 cursor-pointer'>
            قبلا ثبت نام کرده اید؟
        </button>
    </div>
  )
}

export default Register