import React from 'react'
import Layout from '../components/Layout';
import Hero from '../components/Cases-components/Hero';
import CasesSection from '../components/Cases-components/CasesSection';
import CasesCards from '../components/Cases-components/CasesCards';
import Review from '../components/Cases-components/Review';

export default function Cases() {
  return (
 <Layout>
<Hero/>
<CasesSection/>
<CasesCards/>
<Review/>
</Layout>   

  )

}
