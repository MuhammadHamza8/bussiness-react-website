import React from "react";

export default function Branding() {
  return (
    <div className="container mx-auto py-[221px]">
      <h1 className="text-[44px] font-black text-center">Our Research & Case Studies</h1>
      <p className="text-center text-lg font-normal mt-7">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been <br/>the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of <br/>type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </p>

      <div className="grid grid-cols-2  mt-[48px]">
        <div className="mx-28">
          <h1 className="text-[#1E1E1E] text-[30px] font-bold">
            Lorem Ipsum is simply
          </h1>
          <p className="text-[#1E1E1E]  text-lg text-justify mt-[13px]">
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry.  orem Ipsum has been the industry Lstandard
            dummy text ever since the 1500s, when an unknown 
            printer took a galley of type Lorem IpsumL is simply dummy
            text of the printing and typesetting industry.Lorem Ipsum has been
            the industry's     standard dummy text ever since the 1500s,   
         when an unknown printer took.
          </p>

          <button className="w-[157px] h-11 bg-[#FACA10] rounded-md mt-[21px] text-white">
            Market Research
          </button>
        </div>
        <div className="rounded-[25px] border-solid border-2 w-[497px] h-[441px] py-[8px] ">
            <img src="assets/images/8.png" className="rounded-lg mx-auto" alt="img" />
        </div>
      </div>
    </div>
  );
}
