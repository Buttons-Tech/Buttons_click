import Image from 'next/image'
import React from 'react'
import build from '../../public/img/build.png'
import design from '../../public/img/design.png'
import test from '../../public/img/test.png'

const HowItWorks = () => {
  return (
    <>
    <div className='w-screen h-[910px] px-10'>
        <h1 className='text-[#543A2F] font-extrabold text-[60px] font text-center pt-8 '>How It Works</h1>
        <div className='pt-8'>
        <div  className='flex '>
            <div className='pr-60'>
            <h2 className='font-bold text-[32px] pt-8 '>Discover & Design</h2>
            <span className='text-[28px] '>We align with your goals through discovery <br />and design intuitive, user-friendly interfaces <br />tailored to your audience.</span>
            </div>
            <Image src={design} alt="" width={185} height={185} className="w-[182px] h-[185px]"/>
        </div>
        <div className='flex pl-60 py-20'>
            <Image src={build} alt=""width={185} height={185} className="w-[182px] h-[185px]"/>
            <div className='pl-60'>
            <h2 className='font-bold text-[32px] '>Develop & Build</h2>
            <span className='text-[28px]'>We develop scaleable, high-performance software <br />that integrates with your systems and adapts to <br />future needs.</span>
            </div>

        </div>
        <div className='flex'>
            <div className='pr-60'>
            <h2 className='font-bold text-[32px] '>Test, Launch & Support</h2>
            <span className='text-[28px]'>We test rigorously, launch securely, and provide <br />ongoing support to help you grow confidently.</span>
            </div>
            <Image src={test} alt="" className="w-[182px] h-[185px]" />
        </div>
        </div>
    </div>
    </>
  )
}

export default HowItWorks