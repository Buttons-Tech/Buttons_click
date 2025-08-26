
import React from 'react'
import ServicesCard from './ServicesCard'
// import servicesData from '../data/servicesData'


const Ourservice = () => {
  return (
    <>
    <div className='w-screen h-[905px] py-10 relative '>
        <h1 className='text-center font  font-extrabold text-[60px] text-[#543A2F] pb-4 '>Our Services</h1>
        <h3 className='text-center font-medium text-[28px]'>From concept to deployment, we provide end-to-end solutions that empower your <br /> business to thrive in a digital world.</h3>
        <div className='md:flex w-[1211px] h-[568px] gap-3 sm:mx-46 md:my-10 md:mx-20'>
          {/* {servicesData.map(service => (
            <ServicesCard key={service.id} {...service} />
          ))} */}
        </div>
    </div>
    </>
  )
}

export default Ourservice