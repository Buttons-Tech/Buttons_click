import Image from 'next/image'
import React from 'react'
import Boy from '../../../public/dream-img/Boy.png'

const Hero = () => {

  

  return (
    <div className='bg-white w-[357px] flex justify-center m-auto rounded-[8px] h-100 relative -top-4 '>
      <Image alt='boy' src={Boy} width={200} height={400}  className='w-[167px] h-[252px] absolute -top-1 z-10' />
      <div className='flex relative items-center justify-center w-[296px] h-[251px] overflow-clip mt-[27px]'>

        <div className='w-[343px] bg-[#F8F7FF] h-[343px] rounded-[100%] flex items-center justify-center absolute '>

          <div className='w-[303px] bg-[#EFECFD] h-[303px] rounded-[100%] flex items-center justify-center'>

            <div className='w-[249px] bg-[#DDD7FD] h-[249px] rounded-[100%] flex items-center justify-center'>

            <div className='w-[189px] bg-[#A794FF] h-[189px] rounded-[100%]'>
              
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
