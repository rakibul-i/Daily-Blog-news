import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        className="d-flex align-items-center"
        expand="lg"
        variant="dark"
      >
        <Container className="py-2 ">
          <Navbar.Brand as={Link} to="/">
            <h3 className="pt-2">Daily Blog News</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex justify-content-center align-items-center">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/features">
                Features
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing">
                Pricing
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <Button variant="outline-light">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
