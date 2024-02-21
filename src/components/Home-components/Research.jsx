import React from "react";

export default function Branding() {
  return (
    <div className="container mx-auto ">
      <h1 className="xs:text-lg xs:py-5  sm:text-2xl text-[44px] font-black text-center md:py-5">Our Research & Case Studies</h1>
      
      <p className=" sm:text-base text-center text-lg font-normal mt-7">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.  has survived not only five
        centuries,
      </p>

      <div className="grid sm:grid-cols-1 sm:gap-4 sm:mt-2   md:grid-cols-1 md:gap-x-2 lg:grid-cols-2  md:w-full  mt-[48px] lg:w-full    py-5">
        <div className="mx-28">
          <h1 className="xs:text-lg sm:text-2xl  md:text-2xl
           md:text-center text-[#1E1E1E] text-[30px] font-bold">
            Lorem Ipsum is simply
          </h1>
          <p className="xs:text-sm  sm:text-base md:text-base text-[#1E1E1E]  text-lg  mt-[13px]">
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry.  orem Ipsum has been the industry Lstandard
            dummy text ever since the 1500s, when an unknown 
      
          </p>

          <button className=" sm:px-2     lg:px-2 w-[150px] h-10 text-center rounded-lg text-white bg-[#FACA10]">
            Market Research
          </button>
        </div>
        <div className=" sm:w-72 sm:h-40  sm:py-0 sm:mx-auto  hidden lg:block	 md:rounded-[25px] border-solid border-2 md:max-w-md   md:py-0  py-[8px] ">
            <img src="assets/images/8.png" className="   rounded-lg mx-auto" alt="img" />
        </div>
      </div>
    </div>
  );
}
