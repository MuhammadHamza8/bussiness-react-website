import React from 'react'


export default function Hero() {
  return (
    <div className="container mx-auto grid  sm:gap-y-6 grid-cols-2 ">

    <div className=' sm:mx-auto  lg:ml-16 lg:mt-32  '>
      <h1 className='sm:text-lg  lg:text-[34px] text-black  font-black '>Get Bussiness Solutions with TheFirm.</h1>
      <p className=' sm:py-2   py-8 '>
        Lorem Ipsum is simply dummy text of the printing<br/>
        and typesetting industry. Lorem Ipsum has been<br/>
        the industry's standard dummy.
    
      </p>
    
      <button className='sm:px-3 sm:py-1   lg:px-5 py-2 text-white bg-[#FACA10] rounded '>Get In Touch </button>
    
    </div>
    
    <div className=' sm:mx-auto lg:ml-[200px]'>
      <img  className='sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl ' src='assets/images/2.png'  alt='img'/>
    </div>
    
    </div>
    
  )
}



