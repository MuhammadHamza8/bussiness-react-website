// App.js
import "./index.css"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Cases from  './pages/Cases';
import About from "./pages/About";


const App = () => {
  return (
    <Router>
    
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cases" element={< Cases/>} />
          <Route path="/about" element={< About/>} />
        
          </Routes>
  
    </Router>
  );
};

export default App;

