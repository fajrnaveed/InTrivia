import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Howwork from './components/Howwork';

const App = () => {
  return (
    <div>
      <>
      
      <Navbar/>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/howwork" element={<Howwork />} />
      </Routes>
      </>
    </div>
  )
}

export default App;
