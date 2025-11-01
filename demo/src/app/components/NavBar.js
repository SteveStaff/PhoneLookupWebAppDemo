import React from 'react'
import { FiPhone  } from "react-icons/fi";

const NavBar = () => {
  return (
    <div className='flex flex-row gap-7 py-5 px-5 text-3xl border-b-2 border-gray-300 w-full items-center bg-white'>
        <FiPhone  className='bg-blue-600  text-white rounded-md border-black shadow-blue-100' size={60}/>

        <div className='text-black lg:text-4xl text-3xl' style={{fontFamily:'-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif'}}>Who's Calling Me?</div>   

    </div>
  )
}

export default NavBar