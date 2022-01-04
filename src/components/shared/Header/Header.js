import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { currentUser, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-5">
      <Navbar
        bg="dark"
        className="d-flex align-items-center relative fixed-top"
        expand="lg"
        variant="dark"
      >
        <Container className="py-2 relative ">
          <Navbar.Brand as={Link} to="/">
            <h3 className="pt-2 fw-bold">
              <span className="text-info">Daily</span> <span>Blog</span>
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex justify-content-center relative align-items-center">
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
              {currentUser ? (
                <div className="relative">
                  <button onClick={isOpenHandler}>
                    <img
                      className=" h-12 w-12 "
                      src={currentUser?.photoURL}
                      alt=""
                      style={{ borderRadius: "30px" }}
                    />
                  </button>
                  <div
                    className={
                      isOpen
                        ? "bg-gray-900 absolute right-0 top-12 px-3 w-52 py-3 text-black rounded"
                        : " hidden"
                    }
                  >
                    <h1 className="text-center capitalize text-white font-bold text-xl p-2">
                      {currentUser?.displayName}
                    </h1>
                    <Nav.Link
                      as={Link}
                      className="block text-center   bg-white text-black py-1 px-3 my-3"
                      to="/myBlogs"
                    >
                      My Blogs
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      className="block text-center bg-white text-black py-1 px-3 my-3"
                      to="/writeBlog"
                    >
                      Write a blog
                    </Nav.Link>
                    <Nav.Link
                      as={Link}
                      className="block text-center bg-white text-black py-1 px-3 my-3"
                      to="/review"
                    >
                      Rate Us
                    </Nav.Link>
                    <button
                      onClick={logOut}
                      className="bg-white block w-full px-3 py-1 rounded"
                    >
                      Log out
                    </button>
                  </div>
                </div>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <Button variant="outline-info">Login</Button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
