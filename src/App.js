// App.js
import "./index.css"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Cases from  './pages/Cases';


const App = () => {
  return (
    <Router>
    
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cases" element={< Cases/>} />
          {/* {/* Add more routes for other pages as needed */}
          </Routes>
  
    </Router>
  );
};

export default App;

