import React from 'react'

export default function Hero(prop) {
    return (
        <div className='container mx-auto grid lg:grid-cols-2  xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2  '>

            <div className=' md:mt-2 lg:mt-[100px]'>
                <h1 className='  lg:text-[44px] font-black text-[#1E1E1E]'> {prop.hero}   Our Research & <br/> Case Studies </h1>

                <p className='  text-[18px] font-normal mt-[28px]'>Lorem Ipsum is simply dummy text of the printing<br/>
                    and typesetting industry. Lorem Ipsum has been<br/>
                    the industry's standard dummy.</p>

                <button className='   w-[157px] h-[47px] bg-[#FACA10] rounded-[5px] text-center text-white md:mt-[32px] '>Get in Touch</button>

            </div>

            <div>

                <img className='xs:my-4 '  src="assets/images/14.png" alt="img" />

            </div>


        </div>
    )
}
