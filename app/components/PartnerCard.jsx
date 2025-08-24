import React from 'react'

const PartnerCard = (props) => {
  return (
    <div className='flex items-center justify-center mt-5  border border-[#D0CFCD] shadow gap-3 h-[6rem]  text-[0.7rem]  p-[1rem] rounded-[5px]'>
          <img src={props.img} alt='Partners' className='h-[3rem]'/>
          <span>{props.name}</span>
        </div>
  )
}

export default PartnerCard
