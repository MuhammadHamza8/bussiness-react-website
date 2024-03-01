import React from 'react'

export default function Solution(prop) {
  return (

    <div className='container mx-auto grid sm:grid-cols-1 sm:gap-2 md:grid-cols-2 md:gap-x-[200px]  lg:grid-cols-2  mt-3  '>

        {/* Bussiness Solution */}
<div className='mx-auto'>
<img className='xs:max-w-xs  sm:max-w-sm  md:max-w-md lg:max-w-lg' src='assets/images/7.png' alt='img' />
</div>


<div className=' sm:mt-6  md:mt-16 sm:py-4  lg:mt-24 mx-auto'>
<h1 className='xs:text-lg  sm:text-[20px]  lg:text-3xl font-black '>{prop.sol1}</h1>
<p className='sm:text-sm   lg:text-lg font-normal '>{prop.sol2}</p>

    <button className=' xs:w-[100px] xs:text-base   sm:px-2     lg:px-2 w-[150px] h-10 text-center rounded-lg text-white bg-[#FACA10] '>Get In Touch </button>

</div>        

    </div>
  )
}
