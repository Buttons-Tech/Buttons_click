import Image from 'next/image'
import React from 'react'

const Categories = () => {
  return (
    <>
    <div>
        <div className='mt-[31px] text-[17px] font-bold text-center'>
            <span>Choose your spaceship</span>
            <Image className='inline ml-[10px]' src='/dream-img/spaceship.png' alt='rocket' width={40} height={40}/>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-[31px] gap-[20px] px-[20px]'>
            <div className='w-[277px] relative h-[152px]  bg-[#FF546C] rounded-[20px] flex flex-col overflow-clip'>
                <div className='flex flex-col ml-4 mt-3 text-white'>

                <span>Become a</span>
                <span className='font-black text-[27px] -mt-2 text-shadow-xl'>CREATIVE</span>
                <Image className='absolute right-0 bottom-0' src='/dream-img/flower_girl2.png' alt='creative' width={140} height={140}/>
                <div className='absolute right-4 top-4'>
                  <div className='w-[89px] z-10 h-[89px] border-[10px] border-[#FFC9D1] rounded-full bg-[#FF546C]'></div>
                  <div className=' w-[110px] absolute top-0 z-1  h-[110px] rounded-full border bg-[#FF98A6]'></div>
                  {/* <div className='w-[143px] h-[143px] rounded-full'>hey</div> */}
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Categories
