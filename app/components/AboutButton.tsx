import Image from 'next/image'
import React from 'react'
import about from '../../public/img/about.png'

const AboutButton = () => {
  return (
    <>
       <div className='w-screen h-[712px] bg-[#F3D5BA] '>
        <h1 className='font font-extrabold text-[55px] text-[#53392C] pt-14 text-center '>About Buttons</h1>
        <div className='flex pt-9 pl-4'>
            <Image src={about} alt="" width={640} height={454} className='w-[640px] h-[454px]'  />
                <div className=' px-10'>
            <div className='pb-16 pt-4'>
                <span className='gap-3 text-[22px] '>At Buttons, we are passionate about creating, designing, and <br /> delivering cutting-edge software solutions that empower <br /> businesses to thrive in a digital world. Our mission is to simplify <br /> technology while maximizing efficiency, ensuring that our clients <br /> stay ahead of the curve with innovation, scalable, and user- <br />friendly software.</span><br />
            </div>
                <span className='text-[22px] gap-7 mt-7'>We are a team of forward-thinking software engineers, designers, <br /> and problem-solvers dedicated to transforming ideas <br /> into reality, We specialize in custom software development, UI/ <br />UX design, and enterprise solutions tailored to meet the unique <br /> needs of businesses across various industries.</span>
                </div>
        </div>
       </div>
    </>
  )
}

export default AboutButton