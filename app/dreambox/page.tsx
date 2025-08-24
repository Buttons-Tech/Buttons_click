import React from 'react'
import NavBar from '../components/Dream/NavBar'
import Hero from '../components/Dream/Hero'
import HeroHeader from '../components/Dream/HeroHeader'
import Partners from '../components/Dream/Partners'

const page = () => {
  return (
    <>
    <div className='bg-white w-screen p-12'>

      <NavBar/>
      <Hero/>
      <HeroHeader/>
      <Partners />

    </div>
    </>
  )
}

export default page
