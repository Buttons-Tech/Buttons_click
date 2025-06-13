import Image from 'next/image'
import React from 'react'
import button from '../../public/img/button.png'

const Whychoosebutton = () => {
  return (
<>
    <div className='max-w-screen min-w-screen h-[816px] px-10'>
        <h1 className='font text-[#5C4034] text-[55px] font-extrabold text-center pt-12'>Why Choose Buttons?</h1>
        <div>
            <div className="w-[550px] h-[550px] bg-[#D79E71] mt-12 rounded-[20px] py-14 px-12">
              <Image src={button} width={150} height={150} alt="" />
              <h1 className='text-[#5C4034] font-bold text-[32px] pb-8 '>Connection/Activation </h1>
              <span className='font-semibold text-[20px] text-[#5C4034]'>Buttons are used to initiate actions, connect <br /> systems, and activate processes. This can <br /> metaphorically represent our role in helping <br /> businesses "activate" their digital potential and <br /> "connect" with their customers in new ways.</span>
            </div>
        </div>
    </div>
</> 
 )
}

export default Whychoosebutton