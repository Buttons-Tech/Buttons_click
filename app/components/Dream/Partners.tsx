import React from 'react'
import PartnerCard from '../PartnerCard';

const Partners = () => {

  const partners = [
    { name: 'Nigerian Navy', imgSrc: '/dream-img/navyschool.png' },
    { name: 'St, Saviours', imgSrc: '/dream-img/STsaviours.png' },
    { name: 'Juilliard', imgSrc: '/dream-img/Juilliard.png' },
    { name: 'Richfield', imgSrc: '/dream-img/Richfield.png' },
    { name: 'Berkley', imgSrc: '/dream-img/Berkley.png' },
    { name: 'Pampers', imgSrc: '/dream-img/Pampers.png' },
  ];


  return (
    <div className='flex  flex-col text-center '>
      <span className='text-[#696EB9] text-[2rem] font-bold'>Our Partners</span>
      <span className='text-[1.3rem]'>We work with the best schools</span>
      <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 px-4'>
        {partners.map((partner, index) => (
          <PartnerCard key={index} name={partner.name} img={partner.imgSrc} />
        ))}
        
      </div>
    </div>
  )
}

export default Partners
