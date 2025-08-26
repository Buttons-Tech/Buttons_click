import React from 'react'
import Button from './Button'

const NavBar = () => {
  return (
    <>
        
            <div className='bg-white w-full mb-[2rem] '>
                <div className='flex gap-4 items-center p-5 justify-between '>
                    <div>

                        <span className='text-[16px]  text-black italic font-black'>DREAMBOX</span>
                        <div className='flex text-[14px] -mt-1 ml-1'>

                            <span className='font-bold text-[#66599E] text-[10px]'>CREATIVE-TECH  </span>
                            <span className='ml-[3px] text-[#66599E] text-[10px]'>ACADEMY</span>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>

                    <Button/>
                    <img className='w-[32px] ' src="/dream-img/dashboard.png" alt="" />
                    </div>
                </div>
            </div>
        
    </>
  )
}

export default NavBar
