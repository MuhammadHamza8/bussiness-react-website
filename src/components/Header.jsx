import React from 'react'

import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <>

    <div className=' container mx-auto   flex justify-between mt-3 '>

    <img src='assets/images/logo.png' height="67" width="250" alt='img' />

     <nav className='mr-6'>
    
      <ul className='flex gap-x-9 '>
        <li className='text-base text-black font-bold '><Link to="/"> Home</Link> </li>
        <li  className='text-base text-black font-bold '> <Link to= "/cases"> Cases </Link> </li>
        <li  className='text-base text-black font-bold '> <Link to = "/about">About us</Link>  </li> 
        <li  className='text-base text-black font-bold '> <Link to ="/solutiondesign">Solution</Link> </li>
        <li  className='text-base text-black font-bold '> <Link to= "/journeypage">Journey</Link>  </li>
        <li  className='text-base text-black font-bold '> <Link>Contact</Link></li> 
      </ul>
      </nav>
      <button className='px-5 py-2 text-white bg-[#FACA10] rounded'>Get In Touch </button> 
   
     </div>  
    </>
  )
}
