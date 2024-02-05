import React from 'react'

import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <>

    <div className=' container mx-auto flex justify-between mt-3 lg:bg-yellow-300 md:bg-slate-900 sm:bg-red-600'>

    <img src='assets/images/logo.png' height="67" width="250" alt='img' />

     <nav className='mr-6  '>
    
      <ul className='flex gap-x-9 '>
        <li className='text-base text-black font-bold '><Link className='no-underline text-black' to="/"> Home</Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to= "/cases"> Cases </Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to = "/about">About us</Link>  </li> 
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to ="/solutiondesign">Solution</Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to= "/journeypage">Journey</Link>  </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to ="/contact">Contact</Link></li> 
      </ul>
      </nav>
      <Link className='no-underline text-white' to="/contact"> <button className='px-5 py-2 text-white bg-[#FACA10] rounded'>Get In Touch </button> </Link>
   
     </div>  
    </>
  )
}
