import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Auth from './Auth';
// import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth/>}/>
        {/* <Route path="/home" element={<Home/>}/> */}
      </Routes>
    </Router>
  )
}

export default App