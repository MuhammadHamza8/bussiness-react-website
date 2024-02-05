import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
<div className='container mx-auto'>
  <img src="assets/images/logo.png"  className="mx-auto" alt="img" />

    <ul className='flex gap-x-[58px] mt-[50px] ml-[200px]'>
    <li className='text-base text-black font-bold '><Link className='no-underline text-black' to="/"> Home</Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to= "/cases"> Cases </Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to = "/about">About us</Link>  </li> 
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to ="/solutiondesign">Solution</Link> </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to= "/journeypage">Journey</Link>  </li>
        <li  className='text-base text-black font-bold '> <Link className='no-underline text-black' to ="/contact">Contact</Link></li> 

    </ul>

    <div className='flex gap-x-[44px] ml-[400px] mt-[60px]'>
    <img src="assets/images/facebook.png" alt="" />
    <img src="assets/images/twiter.svg" alt="" />
    <img src="assets/images/youtub.svg" alt="" />
    <img src="assets/images/linkdin.svg" alt="" />
    <img src="assets/images/pintress.svg" alt="" />
    </div>

    <p className='mt-[40px] text-center font-semibold text-[18px]'>Copyrights ©2020 Thefirm. All Right Reserved</p>

    
</div>
  )
}
