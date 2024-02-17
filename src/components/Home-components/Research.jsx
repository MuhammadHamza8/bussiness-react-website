import React from "react";

export default function Branding() {
  return (
    <div className="container mx-auto ">
      <h1 className=" sm:text-2xl text-[44px] font-black text-center">Our Research & Case Studies</h1>
      
      <p className=" sm:text-base text-center text-lg font-normal mt-7">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </p>

      <div className="grid sm:grid-cols-1 sm:gap-4 sm:mt-2   md:grid-cols-1  md:w-full  mt-[48px] lg:w-full">
        <div className="mx-28">
          <h1 className=" sm:text-2xl  md:text-2xl
           md:text-center text-[#1E1E1E] text-[30px] font-bold">
            Lorem Ipsum is simply
          </h1>
          <p className=" sm:text-base  text-[#1E1E1E]  text-lg text-justify mt-[13px]">
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry.  orem Ipsum has been the industry Lstandard
            dummy text ever since the 1500s, when an unknown 
            printer took a galley of type Lorem IpsumL is simply dummy
            text of the printing and typesetting industry.Lorem Ipsum has been
            the industry's     standard dummy text ever since the 1500s,   
         when an unknown printer took.
          </p>

          <button className=" sm:w-[150px] sm:h-8 sm:text-sm  sm:ml-12  md:ml-[310px]  md:text-base w-[157px] h-11 bg-[#FACA10] rounded-md mt-[21px] text-white">
            Market Research
          </button>
        </div>
        <div className=" sm:w-72 sm:h-40  sm:py-0 sm:mx-auto    md:rounded-[25px] border-solid border-2 md:w-[350px] md:h-[250px] md:py-0  py-[8px] ">
            <img src="assets/images/8.png" className="  rounded-lg mx-auto" alt="img" />
        </div>
      </div>
    </div>
  );
}
