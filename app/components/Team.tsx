import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
<>
{/* <div className="w-screen h-[704px]">
<h1 className='text-[#543A2F] font font-extrabold text-[60px] text-center '>Meet the Team</h1>
</div> */}

{/* Testimonial */}
<div className='w-screen h-[681px] '>
    <h1 className="text-[#543A2F] font font-bold text-[30px] ">testimonials</h1>
    <h2 className='text-[#543A2F] font font-bold text-[52.33px] '>Client’s Say About Us</h2>
    <span className="text-[#2C2C2C] -font font-semibold text-[18px] ">These are things that clients who have used Buttons Technology says.</span>
    <div>
    {/* <Image src={} alt="" /> */}
    <div className='bg-[#C7724E] w-[432px] h-[317.13px] rounded-[25.12px] '>
        <span className="font-semibold text-[16px] text-white">"Our team was spending hours each week manually <br /> processing data.  Buttons Technology has completely <br /> transformed our workflow.  We've automated the <br /> entire process, saving us significant time and reducing <br /> errors.  It's been a game-changer for our productivity.”</span>
        <hr className='w-[378.83px]' />
        <span className="text-[#32241D] font-bold text-[16.74px] "> Sarah Jones</span>
        <div className='flex gap-28'>
        <span className="font-medium text-[14px] text-white ">Operations Manager, <br />Acme Retail</span>
        <div>
            <span className='text-[14.65px] text-[#FFD700]'>5.0</span>
        {/* <Image src={} alt="" /> */}
        </div>
        </div>
    </div>
    </div>
</div>
</>  
)
}

export default Team