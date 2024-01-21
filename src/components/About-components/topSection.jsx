import React from 'react'

export default function topSection() {
  return (
<div className=' grid grid-cols-2 gap-x-[83px] bg-[#F6F6F6]'> 
  
  <div className='mt-[98px] ml-[92px]'>


<h1 className='text-40px  font-bold  text-[#1E1E1E] tracking-[2px] '>Lorem Ipsum</h1>


<p className='text-lg font-normal text-[#1E1E1E] leading-[31.68px] mt-[9px] text-justify w-[580px]  h-[425px]'>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
   Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
   when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
</p>




<div className='flex  mr-[84px] gap-x-5  py-[69px]'>
<button className='w-[220px] h-[50px] rounded-[5px] bg-[#FACA10] text-[#FFFFFF] text-[24px] font-normal'> Digital Partners </button>
<button className='w-[160px] h-[50px] rounded-[5px] bg-[#FACA10] text-[#FFFFFF] text-[24px] font-normal'> Coaching </button>
</div>



</div>

<div className='mt-[69px]'>
    <img src='assets/images/24.png' alt='img'/>


</div>



    </div>
  )
}
