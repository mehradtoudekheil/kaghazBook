import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import Register from "../components/accountRegC/Register"
import Login from "../components/accountRegC/Login"


function AccountRegPage() {

    const info = useContext(MyContext);

    // const test = true;


  return (
    <div className='w-full h-screen flex justify-center items-center'>
        
        {info.signStatus ? <Register/> : <Login/>}

    </div>
  )
}

export default AccountRegPage