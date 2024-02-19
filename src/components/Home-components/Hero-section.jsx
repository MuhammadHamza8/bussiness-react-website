import React from 'react'


export default function Hero() {
  return (
    <div className="container mx-auto grid  sm:gap-y-6 grid-cols-2 ">

    <div className=' sm:mx-auto  lg:ml-16 lg:mt-32  '>
      <h1 className='sm:text-lg md:text-base  lg:text-3xl text-black  font-black '>Get Bussiness Solutions with TheFirm.</h1>
      <p className='sm:text-sm md:text-base  lg:text-lg sm:py-2   py-8 '>
        Lorem Ipsum is simply dummy text of the printing<br/>
        and typesetting industry. Lorem Ipsum has been<br/>
        the industry's standard dummy.
    
      </p>
    
      <button className='sm:px-2     lg:px-2 w-[150px] h-10 text-center rounded-lg text-white bg-[#FACA10] '>Get In Touch </button>
    
    </div>
    
    <div className=' sm:mx-auto  md:mt-[-45px]'>
      <img  className='  lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl ' src='assets/images/2.png'  alt='img'/>
    </div>
    
    </div>
    
  )
}



