import React from 'react'

import { Link } from 'react-router-dom';


export default function Header() {
  return (
<div className='container mx-auto grid grid-cols-3 mt-3 gap-x-10 '>

<div>  
  <img   src='assets/images/logo.png' height="67" width="250" alt='img' />
   </div>
  

     <nav className='mr-6'>
    
      <ul className='flex gap-6'>
        <li className='text-base text-black font-bold '><Link className='no-underline text-black' to="/"> Home</Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to= "/cases"> Cases </Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to = "/about">About</Link>  </li> 
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to ="/solutiondesign">Solution</Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to= "/journeypage">Journey</Link>  </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to ="/contact">Contact</Link></li> 
      </ul>
      </nav>

      
      <div>
      <Link className='no-underline text-white' to="/contact"> <button className='px-5 py-2 text-white bg-[#FACA10] rounded ml-[150px] max-w-[200px]'>Get In Touch </button> </Link>
      </div>
     </div>  
  
  )
}
