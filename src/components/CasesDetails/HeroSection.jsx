
import React from 'react'

export default function HeroSection() {
  return (

    <div className='bg-[#F6F6F6] '>
    <div className='container mx-auto grid grid-cols-2 gap-x-[83px] py-[69px]'>
        <div className='mt-[98px]' >
<h1 className='text-[40px] font-bold text-[#1E1E1E]'>Lorem Ipsum</h1>
<p className='text-justify mt-[9px]'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
     when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. 
     Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
     Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
     Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
     when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 </p>

 <div className='flex gap-x-5 mt-[44px]'>
    <button className='w-[220px] h-[50px] rounded-[5px] bg-[#FACA10] text-[#FFF]'>Digital Partners</button>
    <button className='w-[160px] h-[50px] rounded-[5px] bg-[#FACA10] text-[#FFF]'>Coaching</button>

 </div>

            

        </div>

        <div className='mt-[30px] ' > 
            <img src="assets/images/27.png" alt="img" />
        </div>
         


    </div>
    </div>
  )
}
