import React from 'react'
import NavBar from '../components/Dream/NavBar'
import Hero from '../components/Dream/Hero'
import HeroHeader from '../components/Dream/HeroHeader'
import Partners from '../components/Dream/Partners'
import Counter from '../components/Dream/Counter'
import BigButton from '../components/Dream/BigButton'
import RegisterForm from '../components/ui/RegisterForm'

const page = () => {
  return (
    <>
    <div className='bg-white w-screen p-1'>

      <NavBar/>
      <Hero/>
      <HeroHeader/>
      <BigButton />
      <Counter />
      <Partners />
      {/* <RegisterForm /> */}

    </div>
    </>
  )
}

export default page
