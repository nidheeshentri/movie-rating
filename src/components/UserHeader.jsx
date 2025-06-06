import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const UserHeader = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/">Home</Link>
              <Link to="/ratings">Ratings</Link>
              <Link to="/contact">Contact</Link>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default UserHeader