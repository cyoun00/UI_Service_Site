import React from 'react';
import {BrowserRouter, NavLink, Routes, Route} from 'react-router-dom';
import { Navbar, Nav, Card,Container } from 'react-bootstrap';
import "./style.css";
import logo from "./assets/logo.png";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Lessons from "./pages/Lessons.js";
import ContactUs from "./pages/ContactUs.js";

function App() {

  return(
    <BrowserRouter>
      <div className = "App">
      <Navbar expand="lg" fixed="top" id="navbar" className="navbar">
          <Navbar.Brand as={NavLink} to="/" ><img src={logo} alt="purple coloured bubble"></img></Navbar.Brand>
            <Nav className="ms-auto nav-pills"> 
              <Nav.Link as={NavLink} to="/" >Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about" >About</Nav.Link>
              <Nav.Link as={NavLink} to="/lessons" >Lessons</Nav.Link>
              <Nav.Link as={NavLink} to="/contactus" >Contact Us</Nav.Link>
            </Nav>
      </Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/contactus" element={<ContactUs />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;