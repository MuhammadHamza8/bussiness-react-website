// Home.js
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Home-components/Hero-section';
import Partener from '../components/Home-components/Partener';
import Client from  '../components/Home-components/Client';
import Solution from '../components/Home-components/Solution';
import Reason from '../components/Home-components/Reason';
import Research from '../components/Home-components/Research';
import Blog from '../components/Home-components/Blog';
import Feedback from '../components/Home-components/Feedback';
import Contact from '../components/Home-components/Contact';


const data = {

  heading1:"Get Bussiness Solutions with TheFirm.",
  
  para1:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  
  heading2:"Frustration of Clients",
  para2:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",

  heading3:"Perfect Solution for Your Bussiness ",
  para3:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  heading4:"Reason to Choose Us ",
  para4:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
}









const Home = () => {
  return (
    <Layout>

      <Hero data={data} />
      <Partener  />
      <Client part1={data.heading2} part2={data.para2} />
      <Solution sol1={data.heading3} sol2={data.para3}/>
      <Reason res1={data.heading4} resr2={data.para4} />
      <Research/>
      <Blog/>
      <Feedback/>
      <Contact/>



    </Layout>
  );
};

export default Home;
