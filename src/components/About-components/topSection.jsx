import React from 'react'

export default function topSection() {
  return (
<div className=' grid xs:grid-cols-1   md:grid-cols-1  lg:grid-cols-2  bg-[#F6F6F6]'> 

  
  <div className='mt-[98px]  lg:ml-[92px]'>


<h1 className='xs:text-lg xs:ml-[16%]  xs:text-left lg:text-[40px] md:ml-[17%] lg:ml-[10%] sm:ml-[14%]    font-bold  text-[#1E1E1E]  tracking-[2px]  '>Lorem Ipsum</h1>


<p className='xs:mr-8  xs:text-base lg:text-lg xs:text-justify  xs:px-[100px]    font-normal text-[#1E1E1E] leading-[31.68px] mt-[9px] py-3  '>
 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry standard dummy text ever since the 1500s, 
 when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  
</p>




<div className='flex  mr-[84px] gap-x-5  py-[69px] xs:ml-[25%]    sm:ml-[28%]  md:ml-[35%] lg:ml-[16%] '>
<button className='  xs:w-[120px] xs:text-base xs:p-1   lg:w-[220px] lg:h-[50px] rounded-[5px] bg-[#FACA10] text-[#FFFFFF] text-[24px] font-normal'> Digital Partners </button>
<button className='xs:w-[100px] xs:text-base  lg:w-[160px] lg:h-[50px] rounded-[5px] bg-[#FACA10] text-[#FFFFFF] text-[24px] font-normal'> Coaching </button>
</div>



</div>

<div className='lg:mt-[69px] xs:mx-auto xs:mt-3 md:mt-[150px]'>
    <img  className='xs:max-w-sm sm:max-w-sm  md:max-w-md lg:max-w-lg'   src='assets/images/24.png' alt='img'/>


</div>



    </div>
  )
}
