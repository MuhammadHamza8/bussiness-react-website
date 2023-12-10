import React from 'react'

export default function Header() {
  return (
    <>

    <div className=' container mx-auto   flex justify-between mt-3 '>

    <img src='assets/images/logo.png' height="67" width="250" alt='img' />

     <nav className='mr-6'>
    
      <ul className='flex gap-x-9 '>
        <li className='text-base text-black font-bold '>Home</li>
        <li  className='text-base text-black font-bold '>Solutions</li>
        <li  className='text-base text-black font-bold '>Cases</li>
        <li  className='text-base text-black font-bold '>About us</li> 
        <li  className='text-base text-black font-bold '>Blog</li>
        <li  className='text-base text-black font-bold '>Contact Us</li> 
      </ul>
      </nav>
      <button className='px-5 py-2 text-white bg-[#FACA10] rounded'>Get In Touch </button> 
   
     </div>  
    </>
  )
}
