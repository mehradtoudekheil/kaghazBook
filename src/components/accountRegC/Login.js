import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../../context/MyContext'


function Login() {

    let info = useContext(MyContext)

    const changeReg = () => {
        info.setSignStatus(true);
    }

    return (
        <div className='w-96 bg-white rounded-xl test p-4'>
            <h4 className='text-lg font-bold text-emerald-700 text-center mt-5'>ورود به کاغذ بوک</h4>
            <form className='w-full p-3 mt-4'>
                <input type="text" placeholder='ایمیل یا تلفن :' className='p-2 rounded-xl w-full border outline-yellow-200' />
                <input type="password" placeholder='کلمه عبور : ' className='p-2 rounded-xl w-full border my-4 outline-yellow-200' />
                <button className='w-full p-2 bg-sky-500 hover:bg-sky-700 transition duration-300 my-3 rounded-xl font-bold text-white'>ورود به سایت</button>
            </form>
            <button onClick={changeReg} className='font-bold text-center text-red-400 hover:text-red-700 transition duration-200 cursor-pointer'>
                ثبت نام نکرده اید؟
            </button>
        </div>
    )
}

export default Login