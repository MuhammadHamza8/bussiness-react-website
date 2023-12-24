import React from 'react'

export default function Footer() {
  return (
<div className='container mx-auto'>
  <img src="assets/images/logo.png"  className="mx-auto" alt="img" />

    <ul className='flex gap-x-[58px] mt-[50px] ml-[200px]'>
      <li className='text-[18px] font-bold'>Home</li>
      <li className='text-[18px] font-bold'>Solutions</li>
      <li className='text-[18px] font-bold'>Cases</li>
      <li className='text-[18px] font-bold'>About Us</li>
      <li className='text-[18px] font-bold'>Blog</li>
      <li className='text-[18px] font-bold'>Contact Us</li>

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
