import React from 'react'

const Counter = () => {
  return (
    <>
    <div className=' p-4 flex justify-center'>

    <div className='flex gap-[26px]'>

    <div className='flex flex-col font-bold'>
        <span className='text-[20px]'>5 <span className='text-[14px]'>+</span></span> 
        <span className='font-bold text-[7px]'>Schools
</span>
        <span className='font-bold text-[7px]'>
Connected</span>
    </div>
    <div className='flex flex-col font-bold'>
        <span className='text-[20px]'>105 <span className='text-[14px]'>+</span></span> 
        <span className='font-bold text-[7px]'>Teachers
</span>
        <span className='font-bold text-[7px]'>
Trained</span>
    </div>
    </div>
    </div>
    </>
  )
}

export default Counter
