import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export default function Topbar() {
  return (
    <Navbar bg="primary" variant="dark" className='navbar navbar-container' fixed="top">
    <Container>
    <Navbar.Brand href="#home"><i className="fa-solid fa-leaf px-2"></i>Our Schema</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">My Schemas</Nav.Link>
      <Nav.Link href="#home">Profile</Nav.Link>
      <Nav.Link href="#features">Public Schemas</Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    <Button variant="light">Log Out</Button>
    </Container>
  </Navbar>
  )
}
