// Home.js
import React from 'react';
import Layout from '../components/Layout';


const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto flex justify-between">

        <div className='ml-16 mt-32'>
          <h1 className='text-[48px] text-black  font-black'>Get Bussiness<br/> Solutions with TheFirm.</h1>
          <p className='py-8'>
            Lorem Ipsum is simply dummy text of the printing<br/>
            and typesetting industry. Lorem Ipsum has been<br/>
            the industry's standard dummy.

          </p>

          <button className='px-5 py-2 text-white bg-[#FACA10] rounded'>Get In Touch </button>

        </div>

        <div className='ml-52'>
          <img   src='assets/images/2.png'  alt='img'/>
        </div>

      </div>
{/* section end  */}

<div className='container mx-auto '>
  <img src='assets/images/3.png' alt='img'/>
</div>

{/* section end */}


<div className='container mx-auto ml-[81px]  grid grid-cols-2 justify-items-center mt-2'>
<div className=''>
  <h1 className=' text-[44px] font-black text-black'>Frustration of Clients</h1>
  <p className='text-lg font-normal py-5'>
  Lorem Ipsum is simply dummy text of the printing and typesetting <br/>industry.
   Lorem Ipsum has been the industry's standard dummy <br/>
  text ever since the 1500s,
  </p>
  <ul className='py-2'>
    <li className='flex gap-2 py-3'> <img src='assets/images/question.png' alt='img' /> <p>Loren rasion gravida auem is bibenua tase</p></li>
    <li className='flex gap-2 py-3'> <img src='assets/images/question.png' alt='img'/> <p>Loren rasion gravida auem is bibenua tase</p></li>
    <li className='flex gap-2 py-3'> <img src='assets/images/question.png' alt='img'/> <p>Loren rasion gravida auem is bibenua tase</p></li>
    <li className='flex '> <img src='assets/images/question.png' alt='img'/> <p>Loren rasion gravida auem is bibenua tase</p></li>
   
  
  </ul>
  

</div>


<img src='assets/images/6.png' alt=''/>


</div>




    </Layout>
  );
};

export default Home;
