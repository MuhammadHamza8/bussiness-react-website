import React from 'react'

export default function CasesSection() {
  return (
    <div className='mt-[98px]'>

        <h1 className='lg:text-[44px] font-black text-center text-[#1E1E1E] underline underline-offset-1'>Our Cases</h1>

        <div className='    flex justify-center mt-[68px] lg:gap-x-[85px] '>
            <button className='w-[157px] h-[48px] bg-[#FFFFFF] text-[#C4C4C4] text-center rounded-[5px] hover:bg-[#FACA10] hover:text-white'>Show All </button>
            <button className='w-[157px] h-[48px] bg-[#FFFFFF] text-[#C4C4C4] text-center rounded-[5px] hover:bg-[#FACA10] hover:text-white'>Coaching </button>
            <button className='w-[157px] h-[48px] bg-[#FFFFFF] text-[#C4C4C4] text-center rounded-[5px] hover:bg-[#FACA10] hover:text-white'>Digital Partners </button>
            <button className='w-[157px] h-[48px] bg-[#FFFFFF] text-[#C4C4C4] text-center rounded-[5px] hover:bg-[#FACA10] hover:text-white'>SEO </button>

        </div>



    </div>
  )
}
