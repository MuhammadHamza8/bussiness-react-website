import React from 'react'
import Layout from '../components/Layout';
import Hero from '../components/Cases-components/Hero';
import CasesSection from '../components/Cases-components/CasesSection';
import CasesCards from '../components/Cases-components/CasesCards';
import Review from '../components/Cases-components/Review';

export default function Cases() {
  const data = {
    
    
      heading1:"heading 1",
  

  }
  return (
 <Layout>
 
<Hero hero={data.heading1}/>
<CasesSection/>
<CasesCards />
<Review/>
</Layout>   

  )

}
