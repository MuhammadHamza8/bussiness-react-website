// App.js
import "./index.css"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Cases from  './pages/Cases';
import About from "./pages/About";
import CasesDetails from "./pages/CasesDetails"
import SolutionDesign from "./pages/SolutionDesign"
import JourneyPage from "./pages/JourneyPage";



const App = () => {
  return (
    <Router>

      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cases" element={< Cases/>} />
          <Route path="/about" element={< About/>} />
          <Route path="/casesdetails" element={< CasesDetails/>} />
          <Route path="/solutiondesign" element={< SolutionDesign/>} />
          <Route path="/journeypage" element={< JourneyPage/>} />
         
        
          </Routes>
         
    </Router>
  );
};

export default App;

