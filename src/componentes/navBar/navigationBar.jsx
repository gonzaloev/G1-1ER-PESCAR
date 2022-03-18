import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import "./navigationBarStyles.css";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

import Dropdown from 'react-bootstrap/Dropdown'

import { Link } from "react-router-dom";
/***********/



//import logo from "../../imgs/logo.png";

function NavigationBar() {
  return (
    <>
      <Navbar
        fixed="top"
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ backgroundColor: "#FFD369" }}
      >
        <Container>
          <Navbar.Brand
            as={Link} 
            to="/"
            className="fw-bold"
            
            style={{ color: "#FFD369" }}
          >
            Moovies
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/peliculas">Películas</Nav.Link>
              <Nav.Link as={Link} to="/series">Series</Nav.Link>
              <NavDropdown
                title="Género"
                id="basic-nav-dropdown"
                variant="dark"
                
              >
                <NavDropdown.Item href="#genero/3.1">Acción</NavDropdown.Item>
                <NavDropdown.Item href="#genero/3.2">Aventura</NavDropdown.Item>
                <NavDropdown.Item href="#genero/3.3">Comedia</NavDropdown.Item>
                <NavDropdown.Item href="#genero/3.4">Documental</NavDropdown.Item>
                <NavDropdown.Item href="#genero/3.5">Misterio</NavDropdown.Item>
                <NavDropdown.Item href="#genero/3.6">Thriller</NavDropdown.Item>
                <NavDropdown.Item href="#genero/3.7">Romance</NavDropdown.Item>
                <NavDropdown.Item href="#genero/3.8">Animación</NavDropdown.Item>
                <NavDropdown.Item href="#genero/3.9">Bélico Guerra</NavDropdown.Item>
                <NavDropdown.Item href="#genero/3.10">Ciencia Ficción</NavDropdown.Item>
                <NavDropdown.Item href="#genero/3.11">Drama</NavDropdown.Item>
                <NavDropdown.Item href="#genero/3.12">Fantasía</NavDropdown.Item>
                <NavDropdown.Item href="#genero/3.13">Musical</NavDropdown.Item>
                <NavDropdown.Item href="#genero/3.14">Terror</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="danger">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
