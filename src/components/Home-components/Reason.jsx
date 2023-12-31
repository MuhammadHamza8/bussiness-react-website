import React from 'react'

export default function Reason() {
  return (
    <div className='bg-[#F2F2F2;]'>
    <div className='container mx-auto py-[97px] '> 
        <h1 className='text-[44px] font-black text-center'>Reason to Choose Us</h1>
        <p className='text-center mt-7'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been<br/> the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of <br/>type and scrambled it to make a type specimen book. 
            It has survived not only five centuries,
            </p>

        <div className='flex justify-center gap-x-[76px] mt-7 '>
        <button className='w-[157px] h-11 text-[#C4C4C4] hover:bg-[#FACA10] hover:text-white bg-[#F6F6F6] rounded-md'>Market Research</button>
        <button className='w-[157px] h-11 text-[#C4C4C4] hover:bg-[#FACA10] hover:text-white bg-[#F6F6F6]rounded-md'>Branding</button>
        <button className='w-[157px] h-11 text-[#C4C4C4] hover:bg-[#FACA10] hover:text-white bg-[#F6F6F6] rounded-md'>Reporting</button>
        <button className='w-[157px] h-11 text-[#C4C4C4] hover:bg-[#FACA10] hover:text-white bg-[#F6F6F6] rounded-md' >Data Analysis</button>

    </div>

    <div className='grid grid-cols-2 gap-28 py-[65px] bg-white  w-[1280px] h-[413px] rounded-[30px] mx-auto mt-[60px]'>
    <div className='border-2 rounded-[25px] h-[280px] w-[550px] py-[10px] px-3 mx-[41px]'>
    <img className='mx-auto rounded-[30px]' src="assets/images/9.png" alt="img" />
    </div>

    <div>
    <div className='flex gap-x-[40px] ' >
      <img className='mx-[-30px]' src="assets/images/icon.png" alt="ion" />
      <h1 className='text-[#1E1E1E] text-[30px] font-bold underline underline-offset-1 mt-2  '>Branding</h1>
    </div>
    <p className='text-[18px] font-normal text-justify mt-4 mx-10'>
    Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry.
    Lorem Ipsum has been the industry <br/> standard dummy text ever since the 1500s,
     when an <br/>unknown printer took a galley of type
    </p>
    <button className='w-[157px] h-[48px] rounded-[5px] bg-black mt-[30px] text-white mx-10'>Read More</button>

    </div>

   </div>

</div>

  

    



    </div>
  )
}
