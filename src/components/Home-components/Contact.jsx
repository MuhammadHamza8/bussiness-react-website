import React from 'react'

export default function Contact() {
  return (
   <>

<div className='w-[1442px]  h-[396px] absolute ' style={{ backgroundImage: "url('assets/images/13.png')  "}}>

 </div>

 <div className='mx-auto relative  mt-[149px]  mb-[200px]  w-[938px] h-[507px] bg-[#fff] border border-[#FFFFFF] rounded-[15px] '>

<h1 className='text-[44px] font-black text-center mt-[60px] underline underline-offset-1'>Get in Touch</h1>

<form>
<div className='flex justify-center mt-[42px] gap-x-[120px]'>

<div>
     <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
</div>

<div>
     <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John@gmail.com" required/>
</div>



</div>

<div className='flex justify-center mt-[42px] gap-x-[120px]'>

<div>
     <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+91245467" required/>
</div>

<div>
     <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Subject" required/>
</div>



</div>

<button type="submit" className="w-[157px] h-[48px] bg-[#FACA10] rounded-[5px]  mt-[67px] text-white text-center  ml-[400px]">Submit</button>
</form>


</div>
      

</>
  )
}
