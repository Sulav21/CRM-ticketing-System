import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Header = () => {
  return (
    <Navbar bg="info"  className='fw-bold text-light' expand="lg">
    <Container>
      <Navbar.Brand href="#home">CRM Ticketing System</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/tickets">Tickets</Nav.Link>
          <Nav.Link href="/Logout">Logout</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
