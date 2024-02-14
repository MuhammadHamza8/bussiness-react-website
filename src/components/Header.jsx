import React from 'react'

import { Link } from 'react-router-dom';


export default function Header() {
  return (
<div className='container mx-auto grid sm:py-2    lg:grid-cols-3 lg:mt-3 lg:gap-x-10 '>

<div>  
  <img className='sm:py-2    lg:h-16 lg:w-60'   src='assets/images/logo.png' alt='img' />
   </div>
  


<img id='imge'   onClick={() => {
  const nav = document.getElementById("nav") 
  console.log(nav.style.display)
  if(nav.style.display==="block")
  {
    nav.style.display="none"
  }else{
    nav.style.display="block"
  }


}}    className='sm:h-[40px] sm:mt-3 ' src="assets/images/menu.png" alt="icon" />



     <nav id='nav'  className='sm:mx-auto sm:hidden   lg:visible lg:mr-6'>
    
      <ul className='sm:flex-col lg:flex-row   flex gap-6'>
        <li className='text-base text-black font-bold '><Link className='no-underline text-black' to="/"> Home</Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to= "/cases"> Cases </Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to = "/about">About</Link>  </li> 
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to ="/solutiondesign">Solution</Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to= "/journeypage">Journey</Link>  </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to ="/contact">Contact</Link></li> 
        <Link className='no-underline text-white' to="/contact"> <button className='sm:px-3 sm:py-1 sm:text-sm   lg:px-5 lg:py-2 text-white bg-[#FACA10] rounded  '>Get In Touch </button> </Link>
      </ul>
      </nav>

      
     
     </div>  
  
  )
}
