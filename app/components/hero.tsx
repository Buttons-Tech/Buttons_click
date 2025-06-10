import React from 'react'
import Button from './button'
import Image from 'next/image'
   




const Hero = () => {
      
  return (
    <>
    <div className=' w-screen backgroundImage flex '>
      <div className='justify-between md:flex  md:my-35 mt-3 gap-19 mx-10'>
         
        <div>
            <h1 className='md:text-[52px] text-[42px] font-extrabold font'>TRANSFORMING IDEAS</h1>
            <h1 className='md:text-[52px] text-[42px] font-extrabold font'> INTO</h1>
            <h1 className='md:text-[52px] text-[42px] font-extrabold font text-transparent bg-clip-text bg-gradient-to-r from-[#EF8E33] to-[#40240F]'>POWERFUL SOFTWARE</h1>
            
            <span className='md:text-[32px] text-[24px]'>
              We’re a team of Product Engineers, Designers and <br /> Problem-solvers dedicated to creating solutions <br /> that empower businesses in a digital world.
            </span>
            <div className='flex gap-52 mt-10'>
                {/* <Button /> */}
                {/* <Button /> */}
                <button className='bg-[#D9791F] w-[185px] h-[64px] rounded-[25px] text-white font-medium text-[24px] '>Get started</button>
                <button className='bg-[#D9791F] w-[185px] h-[64px] rounded-[25px] text-white font-medium text-[24px] '>Our services</button>
            </div>
        </div>
        <div className='pt-4 w-[30rem]'>
          <Image
            src= "/img/code.png"
            alt="Hero Image"
            width={500}
            height={400}
            
          />
        </div>
       
      </div>
    </div>
    </>
  )
}

export default Hero