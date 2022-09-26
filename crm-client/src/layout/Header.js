import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem('accessJWT')
    navigate("/");
  };
  return (
    <Navbar bg="info" className="fw-bold text-light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="" style={{ height: "40px", width: "40px" }} />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/dashboard">
              <Nav.Link>Dashboard</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tickets">
              <Nav.Link>Tickets</Nav.Link>
            </LinkContainer>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
