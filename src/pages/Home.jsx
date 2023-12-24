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

const Home = () => {
  return (
    <Layout>

      <Hero/>
      <Partener/>
      <Client/>
      <Solution/>
      <Reason/>
      <Research/>
      <Blog/>
      <Feedback/>
      <Contact/>



    </Layout>
  );
};

export default Home;
