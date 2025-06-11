import arrow from '../../public/img/arrow.png'
import Image from 'next/image'

export const Button2 = () => {
  return (
    <>
     <button className='w-[107px] h-[31.44px] flex rounded-[40px] font-semibold text-[12px] text-white pt-1.5 pl-2 bg-[#D9791F] absolute sm:bottom-69 sm:left-52 md:bottom-79 md:left-25'>Learn more <Image src={arrow} alt="" className='w-[24.69px] h-[24.67px] pb-1.5 pl-2' /></button>
    </>
  )
}
