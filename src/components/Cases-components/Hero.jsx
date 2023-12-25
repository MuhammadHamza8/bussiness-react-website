import React from 'react'

export default function Hero() {
    return (
        <div className='container mx-auto grid grid-cols-2 '>

            <div className='mt-[117px] pb-9'>
                <h1 className='text-[44px] font-black text-[#1E1E1E]'>Our Research & <br/> Case Studies </h1>

                <p className='text-[18px] font-normal mt-[28px]'>Lorem Ipsum is simply dummy text of the printing<br/>
                    and typesetting industry. Lorem Ipsum has been<br/>
                    the industry's standard dummy.</p>

                <button className='w-[157px] h-[47px] bg-[#FACA10] rounded-[5px] text-center text-white mt-[32px] '>Get in Touch</button>

            </div>

            <div>

                <img src="assets/images/14.png" alt="img" />

            </div>


        </div>
    )
}
