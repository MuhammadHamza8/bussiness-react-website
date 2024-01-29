import React from "react";
import Layout from '../components/Layout';
import HeroSolution from "../components/SolutionComponents/HeroSolution";
import SolutionServices from "../components/SolutionComponents/SolutionServices";
import Coaching from "../components/SolutionComponents/Coaching"
import DigitalPartner from "../components/SolutionComponents/DigitalPartner";


const SolutionDesign =()=>{

return(

<Layout>
    <HeroSolution/>
    <SolutionServices/>
    <Coaching/>
    <DigitalPartner/>



</Layout>
    );

};

export default SolutionDesign