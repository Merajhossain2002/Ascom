import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
      <Container>
        <Navbar.Brand
          className="px-2 align-items-center border rounded-pill bg-light"
          href="/home"
        >
          <img
            src="favicon.png"
            width="30"
            height="30"
            className="d-inline-block align-top me-2"
            alt="logo"
          />
          <span className="pe-1 text-info">Ascom</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Link to={"/home"} className="text-decoration-none text-white me-2">
              Home
            </Link>
            <Link
              to={"/courses"}
              className="text-decoration-none text-white me-2"
            >
              Courses
            </Link>
            <Link to={"/faq"} className="text-decoration-none text-white me-2">
              FAQ
            </Link>
            <Link to={"/blog"} className="text-decoration-none text-white me-2">
              Blog
            </Link>
            <Button variant="light" size="md" className="me-2 mt-3 mt-lg-0">
              <Link to={"/login"} className="text-decoration-none text-info ">
                Login
              </Link>
            </Button>
            <Button variant="light" size="md" className="me-2 mt-3 mt-lg-0">
              <Link to={"/Register"} className="text-decoration-none text-info">
                Register
              </Link>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
