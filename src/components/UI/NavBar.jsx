import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import axios from 'axios';

export default function NavBar({ user }) {
  const logoutHandler = async (e) => {
    e.preventDefault();
    const response = await axios('/auth/logout');
    if (response.status === 200) window.location = '/login';
  };

  return (
    <Navbar bg="secondary" data-bs-theme="dark">
      <Container>
        {user ? (
          <>
            <Navbar.Brand href="/">Hello, {user ? user.name : 'guest'}</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="/add/comp">Add</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="/my/comp">My numbers</Nav.Link>
            </Nav>
            <Nav className="mr-auto">
              <Nav.Link href="/logout" onClick={logoutHandler}>
                logout
              </Nav.Link>
            </Nav>
          </>
        ) : (
          <Nav className="ml-auto mr-auto">
            <Nav.Link href="/signup">signup</Nav.Link>
            <Nav.Link href="/login">login</Nav.Link>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
}
