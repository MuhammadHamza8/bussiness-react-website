import React from 'react'

export default function middleSection() {
  return (
    <div className='grid md:grid-cols-1   lg:grid-cols-2 '>
       <div className='mt-[100px] lg:ml-[28%]  mx-auto'>
        <img className='lg:max-w-lg' src='assets/images/25.png' alt='img'/>  

        </div>

        <div className='mt-[120px] bg-[#FFF;] mx-auto'>
            <h1 className='text-[40px] font-normal text-[#1E1E1E] '>Lorem Ipsum</h1>
           
            <p className='text-lg font-normal mt-[1px]  text-justify'>
            Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry. 
            Lorem Ipsum has been the industry standard dummy text <br/>ever since the 1500s,
             when an unknown printer took a galley of type <br/>
            Lorem Ipsum is simply dummy text of the printing and typesetting<br/> industry. 
            Lorem Ipsum has been the industry's standard dummy text<br/> ever since the 1500s, 
            when an unknown printer took. 
            Lorem Ipsum is<br/> simply dummy text of the printing and typesetting industry. 
            Lorem <br/>Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
           

        </div>


    </div>
  )
}
