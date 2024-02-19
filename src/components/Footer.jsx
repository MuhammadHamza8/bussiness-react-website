import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
<div className='xs:flex-col  sm:flex-col  md:flex-col mx-auto lg:bg-blue-500  md:bg-red-400 sm:bg-slate-600  xs:bg-sky-400 '>

  
  <div className='sm:py-2 '>
  <img src="assets/images/logo.png"  className=" mx-auto sm:w-[150px] sm:h-[20px] md:w-44 md:h-8" alt="img" />
  </div>

    <ul className='xs:flex  xs:gap-x-5 xs:py-2 xs:justify-center  sm:flex sm:px-4 sm:py-2 sm:justify-center sm:gap-x-3 md:flex md:px-2 md:py-4  md:gap-x-4 md:mt-4 md:justify-items-center'>
    <li className='text-base text-black font-bold'><Link className='no-underline text-black' to="/"> Home</Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to= "/cases"> Cases </Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to = "/about">About us</Link>  </li> 
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to ="/solutiondesign">Solution</Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to= "/journeypage">Journey</Link>  </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to ="/contact">Contact</Link></li> 

    </ul>

    <div className='xs:flex xs:gap-2 xs:justify-center   sm:flex sm:gap-3 sm:justify-center md:flex md:gap-x-6 md:justify-center md:mt-7  '>
    <img  src="assets/images/facebook.png" alt="" />
    <img src="assets/images/twiter.svg" alt="" />
    <img src="assets/images/youtub.svg" alt="" />
    <img src="assets/images/linkdin.svg" alt="" />
    <img src="assets/images/pintress.svg" alt="" />
    </div>

    <p className=' sm:py-2   md:py-4   mt-[40px] text-center font-semibold text-[18px]'>Copyrights ©2020 Thefirm. All Right Reserved</p>

    
</div>
  )
}
