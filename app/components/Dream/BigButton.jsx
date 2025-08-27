import React from 'react'

const BigButton = () => {
  return (
    <>
    <div className=' text-white w-[271px] m-auto rounded-[38px] p-3 flex  h-[74px] from-[#A40C76] to-[#E93EB5] bg-gradient-to-b items-center justify-center shadow-lg'>
        <div className='flex items-center justify-center gap-4 px-4 '>

        <span className='text-[10px]'>Register your <br /><span className='text-[19px]  font-bold'>CHILD</span> </span>
        <hr className='w-[2px] h-[60px] bg-white' />
        <span className='text-[10px]'>Register your <br /> <span className='text-[19px] font-bold'>SCHOOL</span> </span>
        </div>
        
    </div>
    <div className='text-center mt-[12px]'>

    <span className='text-[#A40C76] '>Register as a <span className='font-bold'>TUTOR</span> </span>
    </div>
    </>
  )
}

export default BigButton
