import React from 'react'

const HeroHeader = () => {
  return (
    <>
        <div className='text-[10px] flex flex-col leading-[19px] -mt-5 p-[29px] bg-white w-[487px]'>
          <div className='gap-2 flex'>
            <span className='text-[24px] font-black text-[#000000] '>EMPOWERING</span> <span className='text-[32px] text-[#000000] '> YOUR</span>
          </div> <br />
            <div className='gap-2 flex'>
            <span className='text-[24px]'>CHILD’S </span><span className='text-[32px] font-bold'>DIVERSE </span>
            </div> <br />
            <span className='text-[24px] font-bold text-[#000000]'>TALENTS</span><br />
            <span className='text-[24px] font-bold text-[#A40C76]'>IN THE DIGITAL AGE</span><br />
            <span className='text-[16px]'>AT DreamBox we discover their unique</span>
            <span className='text-[16px]'>potentials and help them shine</span>
        </div>
    </>
  )
}

export default HeroHeader
