import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserHeader = () => {
  const movies = useSelector(state => state.movies.limit)
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/">Movies ({movies})</Link>
              <Link to="/login">Login</Link>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default UserHeader