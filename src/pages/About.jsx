// About.js

import React from 'react';
import Layout from '../components/Layout';
import TopSection from '../components/About-components/topSection';
import MiddleSection from '../components/About-components/middleSection';
import ThirdSection from '../components/About-components/thirdSection';
 const About = () => {
  return (
    <Layout>
      <TopSection heading="my name is hamza" />
      <MiddleSection/>
      <ThirdSection/>
      
      
     
    </Layout>
  );
};

export default About;
