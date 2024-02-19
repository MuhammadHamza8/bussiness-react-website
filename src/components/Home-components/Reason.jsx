import React from 'react'

export default function Reason() {
  return (
    <div className='bg-[#F2F2F2;] py-5'>
    <div className='container mx-auto  '> 
        <h1 className='sm:text-2xl   lg:text-3xl font-black text-center py-3'>Reason to Choose Us</h1>
           <p className='text-center  mt-7'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>
            when an unknown printer took a galley of type and scrambled <br/>it to make a type specimen book. 
            It has survived not only five centuries,
            </p>
      

        <div className='flex justify-center gap-x-[76px] mt-7 '>
        <button className='w-[157px] h-11 text-[#C4C4C4] hover:bg-[#FACA10] hover:text-white bg-[#F6F6F6] rounded-md'>Market Research</button>
        <button className='w-[157px] h-11 text-[#C4C4C4] hover:bg-[#FACA10] hover:text-white bg-[#F6F6F6]rounded-md'>Branding</button>
        <button className='w-[157px] h-11 text-[#C4C4C4] hover:bg-[#FACA10] hover:text-white bg-[#F6F6F6] rounded-md'>Reporting</button>
        <button className='w-[157px] h-11 text-[#C4C4C4] hover:bg-[#FACA10] hover:text-white bg-[#F6F6F6] rounded-md' >Data Analysis</button>

    </div>

    <div className='grid sm:grid-col-1 sm:w-full sm:gap-y-12  md:grid-cols-2  py-[65px] bg-white   rounded-[30px]  mt-[60px]'>
    <div className='sm:max-w-sm md:max-w-md sm:py-2 sm:h-[170px] sm:mt-20  border-1 rounded-[25px]   md:py-[10px] px-3 mx-[41px]'>
    <img className=' sm:mt-4  rounded-[30px]' src="assets/images/9.png" alt="img" />
    </div>

    <div>
    <div className=' sm:grid sm:grid-cols-1 sm:max-w-sm md:max-w-md lg:max-w-lg ' >
      <img className=' sm:ml-7   mx-[-30px]' src="assets/images/icon.png" alt="ion" />
      <h1 className='sm:ml-10 sm:text-2xl  lg:text-3xl text-[#1E1E1E] text-[30px] font-bold underline underline-offset-1 mt-2  '>Branding</h1>
    </div>
    <p className='sm:text-sm sm:text-left    md:text-base font-normal text-justify mt-4 mx-10'>
    Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry.
    Lorem Ipsum has been the industry  standard dummy text ever since the 1500s,
     when an <br/>unknown printer took a galley of type
    </p>
    <button className='w-[157px] h-[48px] rounded-[5px] bg-black mt-[30px] text-white mx-10'>Read More</button>

    </div>

   </div>

</div>

  

    



    </div>
  )
}
