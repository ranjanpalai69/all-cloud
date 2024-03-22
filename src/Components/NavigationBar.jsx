import React, { useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className='bgcolor d-flex justify-content-around align-items-center p-4'>
      <Navbar.Brand href="#home">
        <img src="https://assets-global.website-files.com/63b435b50cf3c54c440003c3/64b7c31c18bead3d787f90c0_Group%20(35).webp" alt="logo" style={{width:"4rem",height:"3rem"}}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="basic-navbar-nav" className={expanded ? 'show' : ''}>
        <Nav className='mx-auto d-flex gap-4'>
          <Nav.Link href="#home">Products</Nav.Link>
          <Nav.Link href="#features">Solutions</Nav.Link>
          <Nav.Link href="#pricing">Company</Nav.Link>
          <Nav.Link href="#pricing">Resources</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="primary" className='p-2'>Talk to our experts <FaArrowRight /></Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
