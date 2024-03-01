import React, { useState } from 'react'


export default function Hero(prop) {
  const [toggle,setToggle] = useState(true)
  return (
    <div className="container mx-auto grid xs:grid-cols-1 xs:gap-y-4  sm:gap-y-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-2 ">

    <div className='  xs:mx-auto  sm:mx-auto  lg:ml-16 lg:mt-32  '>
      {
toggle === true &&
      <h1 className=' xs:text-base sm:text-lg md:text-base  lg:text-3xl text-black  font-black '>{prop.data.heading1}</h1>
      }
     {
      
      !toggle  ?
      24234324 :
      <p className='xs:text-base sm:text-sm md:text-base  lg:text-lg sm:py-2 xs:py-4   py-8 '>
       {prop.data.para1}
      </p>
     }
     
    
      <button
      onClick={()=>setToggle(!toggle)}
      className='xs:w-[100px] xs:text-sm   sm:px-2     lg:px-2 w-[150px] h-10 text-center rounded-lg text-white bg-[#FACA10] '>Get In Touch </button>
    
    </div>
    
    <div className='xs:mx-auto sm:mx-auto  md:mt-[-45px]'>
      <img  className='  xs:max-w-xs lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl ' src='assets/images/2.png'  alt='img'/>
    </div>
    
    </div>
    
  )
}



