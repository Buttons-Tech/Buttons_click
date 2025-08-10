import React from 'react'
import NavBar from '../components/Dream/NavBar'
import Hero from '../components/Dream/Hero'
import HeroHeader from '../components/Dream/HeroHeader'

const page = () => {
  return (
    <>
    <div className='bg-[#D0CFCD] w-screen p-12'>

      <NavBar/>
      <Hero/>
      <HeroHeader/>
    </div>
    </>
  )
}

export default page
