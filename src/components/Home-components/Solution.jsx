import React from 'react'

export default function Solution() {
  return (

    <div className='container mx-auto grid sm:grid-cols-1 sm:gap-2 md:grid-cols-2 md:gap-x-4  lg:grid-cols-2  mt-3  '>

        {/* Bussiness Solution */}
<div className='mx-auto'>
<img className='sm:w-[400px] md:w-[800px] lg-[1000px]' src='assets/images/7.png' alt='img' />
</div>


<div className=' sm:mt-6 sm:py-4  lg:mt-24 mx-auto'>
<h1 className='sm:text-[20px]  lg:text-[44px] font-black '>Perfect Solution for Your Bussiness</h1>
<p className='sm:text-sm   lg:text-lg font-normal '>Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry.
     Lorem Ipsum has been the<br/> industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries,</p>

    <button className='sm:px-3 sm:py-2 md:py-1    md:px-3  lg:px-5 lg:py-2 text-white bg-[#FACA10] rounded-sm '>Get In Touch </button>

</div>        

    </div>
  )
}
