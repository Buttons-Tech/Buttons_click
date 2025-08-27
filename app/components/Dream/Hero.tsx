import Image from 'next/image'
import React from 'react'
import Boy from '../../../public/dream-img/basketball-boy.png'
import Girl from '../../../public/dream-img/girl-singing.png'
import Tab1 from '../../../public/dream-img/tab1.png'
import Tab2 from '../../../public/dream-img/tab 2.png'

const Hero = () => {

  

  return (
    <>
    
      <Image alt='boy' src={Boy} width={300} height={400}  className=' h-[352px] absolute top-10 left-10 z-10' />
      <Image alt='boy' src={Tab1} width={100} height={50}  className=' h-[52px] w-[113px] absolute top-30 left-10 z-10' />
      <Image alt='boy' src={Tab2} width={100} height={50}  className=' h-[84px] w-[150px] absolute top-60 left-10 z-10' />
    <div className='bg-white mx-[2rem] flex justify-center m-auto rounded-[8px] relative -top-4 '>
      <Image alt='girl' src={Girl} width={190} height={400}  className='  h-[200px] absolute z-10 right-0 bottom-0' />
      <div className='flex relative items-center justify-center w-[343px] h-[251px] overflow-clip mt-[27px]'>

        <div className='w-[343px] bg-[#FFF3FB] h-[343px] rounded-[100%] flex items-center justify-center absolute '>

          <div className='w-[303px] bg-[#FFE4F7] h-[303px] rounded-[100%] flex items-center justify-center'>

            <div className='w-[249px] bg-[#FFADE6] h-[249px] rounded-[100%] flex items-center justify-center'>

            <div className='w-[189px] bg-[#E93EB5] h-[189px] rounded-[100%]'>
              
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
