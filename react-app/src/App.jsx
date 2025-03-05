
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./combonets/NavBar";
import Footer from "./combonets/Footer";
import Home from "./combonets/Home";
import About from "./combonets/About";
import Blog from "./combonets/Blog";
import Contact from "./combonets/Contact";
import Pages from "./combonets/Pages";
import Portfolio from "./combonets/Portfolio";

function App() {
  

  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Portfolio" element={<Portfolio/>} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Pages" element={<Pages/>} />
     
     
    </Routes>
    <Footer/>
    
        </Router>
  )
}

export default App
