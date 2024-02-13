import React from 'react'


export default function Hero() {
  return (
    <div className="container mx-auto grid col-span-2">

    <div className='ml-16 mt-32   '>
      <h1 className='text-[34px] text-black  font-black '>Get Bussiness Solutions with TheFirm.</h1>
      <p className='py-8 '>
        Lorem Ipsum is simply dummy text of the printing<br/>
        and typesetting industry. Lorem Ipsum has been<br/>
        the industry's standard dummy.
    
      </p>
    
      <button className='px-5 py-2 text-white bg-[#FACA10] rounded '>Get In Touch </button>
    
    </div>
    
    <div className='ml-[600px]'>
      <img  className='lg:max-w-2xl ' src='assets/images/2.png'  alt='img'/>
    </div>
    
    </div>
    
  )
}



