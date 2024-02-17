import React from 'react'

export default function Blog () {
  return (
    <div className='bg-[#F2F2F2;]'>

<div className='container mx-auto py-[82px] '>
        <h1 className=' sm:text-base md:text-2xl  text-center text-[#1E1E1E] lg:text-[44px] font-black sm:mt-4 lg:text-3xl '>Our Blogs</h1>

        {/* cards design */}
        <div className='grid sm:grid-cols-1 sm:gap-y-3   md:grid-cols-2       lg:grid-cols-3   py-[64px] justify-items-center'>
            <div className='  w-[340px] h-[560.781px] border-2 border-gray-200 rounded-2xl'>
                <img className='mx-auto' src="assets/images/10.png" alt="img" />
                
                <h2 className='sm:text-2xl md:text-2xl     mx-[21px] '>Lorem Ipsum is</h2>
                <p className='mx-[21px]'>Lorem Ipsum is simply  text of the<br/> printing and type setting industry.<br/> make a type specimen. </p>


                <div className='flex gap-x-1 mx-[18px] mt-[53px]'>
                    <img src="assets/images/11.png" alt="img" />
                    <p>Alex Liones</p>

                 
                   </div>

                   <button className=" w-[157px] h-[43.91px] bg-[#000000] rounded-md mt-[30px] text-white mx-[90px] hover:bg-orange-400 ">
                Read More
          </button>


                
         

            </div>

            <div className='w-[340px] h-[560.781px] border-2 border-gray-200 rounded-2xl'>
                <img className='mx-auto' src="assets/images/10.png" alt="img" />
                
                <h2 className='sm:text-2xl md:text-2xl    mx-[21px] '>Lorem Ipsum is</h2>
                <p className='mx-[21px]'>Lorem Ipsum is simply  text of the<br/> printing and type setting industry.<br/> make a type specimen. </p>


                <div className='flex gap-x-1 mx-[18px] mt-[53px]'>
                    <img src="assets/images/11.png" alt="img" />
                    <p>Alex Liones</p>
                   </div>

                   <button className=" w-[157px] h-[43.91px] bg-[#000000] rounded-md mt-[30px] text-white mx-[90px]  hover:bg-orange-400 ">
                Read More
          </button>


                
         

            </div>


            <div className='w-[340px] h-[560.781px] border-2 border-gray-200 rounded-2xl'>
                <img className='mx-auto' src="assets/images/10.png" alt="img" />
                
                <h2 className='sm:text-2xl md:text-2xl    mx-[21px] '>Lorem Ipsum is</h2>
                <p className='mx-[21px]'>Lorem Ipsum is simply  text of the<br/> printing and type setting industry.<br/> make a type specimen. </p>


                <div className='flex gap-x-1 mx-[18px] mt-[53px]'>
                    <img src="assets/images/11.png" alt="img" />
                    <p>Alex Liones</p>
                   </div>

                   <button className=" w-[157px] h-[43.91px] bg-[#000000] rounded-md mt-[30px] text-white mx-[90px]  hover:bg-orange-400  ">
                Read More
          </button>


                
         

            </div>

        </div>

        


        </div>
    </div>
  )
}
