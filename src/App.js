import React from 'react';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
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
      <Container>
        <Navbar.Brand as={Link} to="/" ><img src={logo} alt="purple coloured bubble"></img></Navbar.Brand>
        <Nav className="me-auto"> 
          <Nav.Link as={Link} to="/" >Home</Nav.Link>
          <Nav.Link as={Link} to="/about" >About</Nav.Link>
          <Nav.Link as={Link} to="/lessons" >How I Work</Nav.Link>
          <Nav.Link as={Link} to="/contactus" >Projects</Nav.Link>
        </Nav>
        </Container>
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