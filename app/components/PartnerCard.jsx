import React from 'react'

const PartnerCard = (props) => {
  return (
    <div className='flex items-center justify-center mt-5  border border-[#D0CFCD] shadow gap-8 h-[8rem]  p-[1rem] rounded-[5px]'>
          <img src={props.img} alt='Partners' className='h-[6rem]'/>
          <span>{props.name}</span>
        </div>
  )
}

export default PartnerCard
