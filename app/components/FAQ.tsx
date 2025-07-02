import Image from 'next/image'
import React from 'react'
import down from '../../public/img/down.png'
import faq from '../../public/img/faq.png'

const FAQ = () => {
  return (
    <>
    <div className='w-screen h-[714px] flex justify-between mt-5 '>
        <div>
            <h1 className='font font-bold text-[30px] text-[#5C4034] pb-6 '>FAQs</h1>
            <h2 className='font font-bold text-[44px] text-[#333333] pb-6'>Frequently Asked Questions</h2>
            <Image src={faq} alt="" width={657} height={487} className="w-[657px] h-[487px] " />
        </div>
        <div className='
        flex-row pt-9 gap-5'>
            <button className='bg-[#EBCCB2] h-[85px] w-[593px] rounded-[10px] flex justify-between test-[24px] font-semibold py-8 px-6'>What is Buttons? <Image src={down} alt="" width={30} height={20} className='w-[48px] h-[48.77px] pb-2 ' /></button>
            <button className='bg-[#EBCCB2] h-[85px] w-[593px] rounded-[10px] flex justify-between test-[24px] font-semibold py-8 px-6'>What do i need to bring my idea to life? <Image src={down} alt="" width={30} height={20} className='w-[48px] h-[48.77px] pb-2 ' /></button>
        </div>

    </div>
    </>
  )
}

export default FAQ