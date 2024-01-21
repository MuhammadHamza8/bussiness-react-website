import React from 'react'

export default function middleSection() {
  return (
    <div className=' grid grid-cols-2 gap-5'>
       <div className='mt-[100px] ml-[92px] '>
        <img src='assets/images/25.png' alt='img'/>  

        </div>

        <div className='mt-[120px] bg-[#FFF;]'>
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
