import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-2 items-center justify- gap-2 mt-3 mx-5'>
      <div className='h-16  flex  text-center  items-center justify-center bg-cyan-400 rounded-full'>Explore</div>
      <div className='h-16 w-16 text-center flex items-center justify-center bg-cyan-400 rounded-full'>Stop</div>
      <div className='h-16 w-16 text-center flex items-center justify-center bg-red-400 rounded-full'>Go</div>
      <div className='h-16 text-center flex items-center justify-center bg-red-400 rounded-full'>Send</div>
    </div>
  )
}

export default page
