// Home.js
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Home-components/Hero-section';
import Partener from '../components/Home-components/Partener';
import Client from  '../components/Home-components/Client';
import Solution from '../components/Home-components/Solution';

const Home = () => {
  return (
    <Layout>

      <Hero/>
      <Partener/>
      <Client/>
      <Solution/>



    </Layout>
  );
};

export default Home;
