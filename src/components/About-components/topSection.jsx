import React from 'react'

export default function topSection({heading}) {
  return (
<div className=' grid xs:grid-cols-1      lg:grid-cols-2 gap-x-[83px] bg-[#F6F6F6]'> 
<h1>{heading}</h1>
  
  <div className='mt-[98px]  lg:ml-[92px]'>


<h1 className='xs:text-lg xs:ml-10  xs:text-left lg:text-[40px]  font-bold  text-[#1E1E1E]  tracking-[2px] '>Lorem Ipsum</h1>


<p className='xs:mr-8  xs:text-base lg:text-lg xs:text-justify  xs:px-[100px]   font-normal text-[#1E1E1E] leading-[31.68px] mt-[9px]   lg:text-right '>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  
</p>




<div className='flex  mr-[84px] gap-x-5  py-[69px] mx-auto'>
<button className='xs:w-[120px] xs:text-base xs:p-1   lg:w-[220px] lg:h-[50px] rounded-[5px] bg-[#FACA10] text-[#FFFFFF] text-[24px] font-normal'> Digital Partners </button>
<button className='xs:w-[100px] xs:text-base  lg:w-[160px] lg:h-[50px] rounded-[5px] bg-[#FACA10] text-[#FFFFFF] text-[24px] font-normal'> Coaching </button>
</div>



</div>

<div className='mt-[69px] xs:mx-auto xs:mt-3'>
    <img  className='xs:max-w-sm'   src='assets/images/24.png' alt='img'/>


</div>



    </div>
  )
}
