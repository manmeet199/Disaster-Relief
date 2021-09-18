import React from 'react'
import {  Container, Nav, Navbar, NavDropdown  } from 'react-bootstrap';


function Home() {
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Disaster Relief Mangement</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Register</Nav.Link>
      <Nav.Link href="#pricing">Map</Nav.Link>
      <Nav.Link href="#pricing">Missing</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Home
