

import { Link } from 'react-router-dom';


export default function Header() {



  return (
<div className='container mx-auto grid sm:py-2    lg:grid-cols-3 lg:mt-3 lg:gap-x-10 '>

<div>  
  <img className='sm:py-2 ml-12'   src='assets/images/logo.png' alt='img' />
   </div>
  


<img id='imge'   onClick={() => {
  const nav = document.getElementById("nav") 
  // console.log(nav.style.display)
  if(nav.style.display==="block")
  {
    nav.style.display="none"
  }else{
    nav.style.display="block"
  }


}}    className='xs:h-7     sm:h-[40px] sm:mt-3 lg:hidden ' src="assets/images/menu.png" alt="icon" />



     <nav id='nav'  className='  sm:mx-auto md:mx-auto lg:mx-auto  '>
    
      <ul className='   xs:flex-col xs:gap-y-2  sm:flex-col lg:flex-row   flex gap-12'>
        <li className='text-base text-black font-bold '><Link className='no-underline text-black' to="/"> Home</Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to= "/cases"> Cases </Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to = "/about">About</Link>  </li> 
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to ="/solutiondesign">Solution</Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to= "/journeypage">Journey</Link>  </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to ="/contact">Contact</Link></li> 

        <Link className='no-underline text-white' to="/contact"> <button className='sm:px-2     lg:px-2 w-[150px] h-10 text-center rounded-lg text-white bg-[#FACA10]  '>Get In Touch </button></Link>
      </ul>
      </nav>

      

      
     
     </div>  
  
  )
}
