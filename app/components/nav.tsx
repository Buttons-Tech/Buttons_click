import Image from 'next/image'
import logo from '../../public/img/logo.png'
import React from 'react'
import Button from './button'

const Nav = () => {
  return (
    <>
     {/* <h1 className='font-bold text-9xl text-red-900 font-sherif'>hello</h1> */}
     <div className='bg-[#F3D5BA] h-[80px] w-screen flex py-2 px-6 justify-between'>
       <div className='w-[189px] h-[56px]  flex items-center justify-center gap-2 '>
        <Image src= "/img/buttons_logo.webp" width={100} height={50}  alt="" />
        <span className='bg-yellow-500 p-1 shadow'>.click</span>
       </div>
        <div className='md:flex gap-13 items-center hidden'>
            <span className='font-bold text-[20px]'>Home</span>
            <span className='text-[20px]  '>About us </span>
            <span className='text-[20px] '>Services</span>
            <span className='text-[20px] '>Blog</span>
            <span className='text-[20px] font-bold '>Contact  us</span>
        </div>
        <Button />
     </div>
    </>
  )
}

export default Nav