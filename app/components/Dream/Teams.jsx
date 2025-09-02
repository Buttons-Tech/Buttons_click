import React from 'react'
import Ohakwechi from '../../../public/dream-img/ohakwechi.png'

const Teams = () => {

  const Teams = [
    {name: 'Ohakwechi', image:"/dream-img/ohakwechi.png", role: "Robotics", bio: "A passionate developer with a knack for creating innovative solutions.", color:" #FF5733"},
    {name: 'Goodluck', image: "/dream-img/Goodluck.png", role: "Design", bio: "An AI enthusiast who loves to   explore the boundaries of machine learning.", color:"#33FF57"},
    {name: 'Miracle', image: "/dream-img/Miracle.png", role: "Special Needs", bio: "A creative mind with a passion for storytelling and brand building.", color:"#3357FF"},
    {name: 'Mjay', image: "/dream-img/Mjay.png", role: "Early Years", bio: "A tech-savvy individual with a love for all things digital and futuristic.", color:"#F333FF"},
    {name: 'Nuel', image: "/dream-img/nuel.png", role: "Coding", bio: "A detail-oriented professional with a background in data analysis and visualization.", color:"#33FFF5"},
    
  ]
  return (
    <>
    <div className='flex overflow-x-scroll px-[2rem] items-center justify-center py-[2rem] '>

    {Teams.map((team, index) => (
    <div className='w-[65px] h-[130px] bg-white flex flex-col  items center justify-center text-center '>
      {/* <Image src={Ohakwechi} alt="Ohakwechi" width={100} height={100} /> */}
      <img src={team.image} className='w-[65px] border rounded-full border-white border-[5px] ' alt="" />
      <h2 className='text-[5px] font-bold'>{team.name}</h2>
      <p className='text-[4px] '>{team.role}</p>
      <p className='text-[4px] w-[43px] m-auto'>{team.bio}</p>
    </div>
      
    ))}
    </div>
    </>
  )
}

export default Teams
