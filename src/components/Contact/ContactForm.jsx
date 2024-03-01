import React from "react";

const ContactForm =()=>{

return (
<>

<div className='w-[1442px]  h-[396px] absolute  xs:hidden ' style={{ backgroundImage: "url('assets/images/13.png')  "}}>

 </div>

 <div className='  mx-auto relative  lg:mt-[149px]  mb-[200px]  lg:w-[938px] h-[507px] bg-[#fff] border border-[#FFFFFF] rounded-[15px] xs:grid justify-center  '>

<h1 className='   lg:text-[44px] font-black text-center lg:mt-[32px] underline underline-offset-1'>Get in Touch</h1>

<form>
<div className='flex xs:flex-col lg:justify-center lg:mt-[42px] lg:gap-x-[120px] xs:grid grid-cols-1 xs:gap-3'>

<div>
     <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text" id="first_name" className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
</div>

<div>
     <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="text" id="first_name" className="   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John@gmail.com" required/>
</div>



</div>

<div className='flex justify-center mt-[42px] gap-x-[120px] xs:grid grid-cols-1 gap-4'>

<div>
     <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
    <input type="text" id="first_name" className= "   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+91245467" required/>
</div>

<div>
     <label for="first_name" className="   block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
    <input type="text" id="first_name" class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject" required/>
</div>



</div>

<button type="submit" className="w-[157px] h-[48px] bg-[#FACA10] rounded-[5px]  mt-[67px] text-white text-center  xs:ml-[30%]">Submit</button>
</form>


</div>
      

</>

    )


}

export default ContactForm