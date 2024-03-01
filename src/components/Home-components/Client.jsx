import React from 'react'

export default function Slider(prop) {
  return (

    
<div className='container mx-auto ml-[81px]  grid sm:grid-cols-1 sm:py-5 md:py-8   md:grid-cols-2 justify-items-center mt-2'>
<div className=''>
  <h1 className='xs:text-lg   sm:text-2xl lg:text-3xl   font-black text-black '>{prop.part1}</h1>
  <p className='xs:py-3  sm:text-sm   lg:text-lg font-normal lg:py-5'>
  {prop.part2}
  </p>
  <ul className=''>
    <li className='flex gap-2 sm:py-1 md:py-2  lg:py-3'> <img src='assets/images/question.png' className='w-[14px;] h-[20px]' alt='img' /> <p>Loren rasion gravida auem is bibenua tase</p></li>
    <li className='flex gap-2 sm:py-1 md:py-2  lg:py-3 '> <img src='assets/images/question.png' className='w-[14px;] h-[20px]' alt='img'/> <p>Loren rasion gravida auem is bibenua tase</p></li>
    <li className='flex gap-2 sm:py-1 md:py-2  lg:py-3 '> <img src='assets/images/question.png'  className='w-[14px;] h-[20px]' alt='img'/> <p>Loren rasion gravida auem is bibenua tase</p></li>
    <li className='flex gap-2 sm:py-1 md:py-2  lg:py-3 '> <img src='assets/images/question.png'  className='w-[14px;] h-[20px]'  alt='img'/> <p>Loren rasion gravida auem is bibenua tase</p></li>
   
  
  </ul>
  

</div>


<img  className="xs:max-w-xs   sm:max-w-sm md:max-w-md lg:max-w-lg md:mt-[100px]" src='assets/images/6.png' alt=''/>


</div>

  )
}




