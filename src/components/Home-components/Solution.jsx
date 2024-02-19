import React from 'react'

export default function Solution() {
  return (

    <div className='container mx-auto grid sm:grid-cols-1 sm:gap-2 md:grid-cols-2 md:gap-x-[200px]  lg:grid-cols-2  mt-3  '>

        {/* Bussiness Solution */}
<div className='mx-auto'>
<img className='sm:max-w-sm  md:max-w-md lg:max-w-lg' src='assets/images/7.png' alt='img' />
</div>


<div className=' sm:mt-6  md:mt-16 sm:py-4  lg:mt-24 mx-auto'>
<h1 className='sm:text-[20px]  lg:text-3xl font-black '>Perfect Solution for Your Bussiness</h1>
<p className='sm:text-sm   lg:text-lg font-normal '>Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry.
     Lorem Ipsum has been the<br/> industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type<br/> and scrambled it to make a type specimen book. 
    <br/>It has survived not only five centuries,</p>

    <button className='sm:px-2     lg:px-2 w-[150px] h-10 text-center rounded-lg text-white bg-[#FACA10] '>Get In Touch </button>

</div>        

    </div>
  )
}
