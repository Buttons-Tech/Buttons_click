import Dev from '../../public/img/Dev.png'

import Image from 'next/image'

import { Button2 } from './Button2';



type Props = {
    // Define any props if needed
    
    title: string;
    description: string;
    image: string;
  
    
}

const ServiceCard = ({ title, description, image,  }: Props) => {
  return (
   <>
    <div className='sm:mt-8 bg-[#F3D5BA] w-[317px] h-[339px] rounded-[40px] border-[0.99px] border-[#979696]'>
                <Image src={image} width={265} height={150} alt="" className='m-auto w-[265px] h-[150px] mt-2 '/>
                <h1 className='text-center font-semibold text-[16.75px] pt-4'>{title}</h1>
                <div className=' m-auto w-[290px] flex gap-9 pt-2'>
                    <ul className="list-disc px-4">
                        <li className='text-[11.84px] pb-1 '>UI/UX Design</li>
                        <li className='text-[11.84px] pb-1 '>Custom Software <br /> Development</li>
                        <li className='text-[11.84px] '>Mobile App <br /> Development</li>
                    </ul>
                    <ul className="list-disc px-2">
                        <li className='text-[11.84px] pb-1 '>Concept & Ideation <br /> Workspace</li>
                        <li className='text-[11.84px] '>E-Commerce <br /> Solution</li>
                    </ul>
                </div>
                {/* <Button2 /> */}
            </div>
   </>
  )
}

export default ServiceCard