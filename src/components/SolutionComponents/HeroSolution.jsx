import React from "react";


const HeroSolution = () =>{


return  (

<div className="container mx-auto grid lg:grid-cols-2 lg:gap-x-[100px] md:grid-cols-2    md:gap-x-14 sm:grid-cols-1 xs:grid-cols-1">
  
  <div>
    <img  className="xs:max-w-sm xs:mx-auto  sm:max-w-sm  sm:mx-auto   md:max-w-xs lg:max-w-lg md:mt-16"  src="assets/images/7.png" alt="img" />

  </div>

  <div className="lg:mt-[150px] md:mt-20 sm:mt-5 sm:ml-[25%] xs:mt-4 xs:ml-[20%] ">
     <h1 className="lg:text-3xl text-[#1E1E1E] font-black md:text-lg sm:text-base xs:text-base">Perfect Solution for Your Bussiness </h1>
     <p>
     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
     It has survived not only five centuries,

     </p>

     <button className="w-[157px] h-[48px] bg-[#FACA10] text-[#FFFFFF] mt-[52px] rounded-[5px]">Read More </button>

  </div>



 


</div>




    
    
)
}

export default HeroSolution