import React from 'react'
import Layout from '../components/Layout';
import Hero from '../components/Cases-components/Hero';
import CasesSection from '../components/Cases-components/CasesSection';
import CasesCards from '../components/Cases-components/CasesCards';
import Review from '../components/Cases-components/Review';

export default function Cases() {
  const data = {
    
    
      heading1:"heading 1 data",
    heading2:"heading 2 data"

  }
  return (
 <Layout>
  {data.heading1}
<Hero footerData="this is footer"/>
<CasesSection/>
<CasesCards cased={data.heading2}/>
<Review/>
</Layout>   

  )

}
