import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      className="navbar navbar-container"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <i className="fa-solid fa-leaf px-2"></i>Our Schema
        </Navbar.Brand>
        {/* <Button variant="light">
          <Link className="px-2" to="Login">
            Log Out
          </Link>
        </Button> */}
      </Container>
    </Navbar>
  )
}
