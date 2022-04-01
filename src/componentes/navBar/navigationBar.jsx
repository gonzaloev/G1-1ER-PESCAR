import React, { useState, useEffect }from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import "./navigationBarStyles.css";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BuscarPelicula } from "../../paginas/Peliculas/BuscarPelicula";

function NavigationBar() {

  const [buscarPelicula, setBuscarPelicula] = useState(undefined)

  useEffect(() => {
    document.getElementById("buscar").addEventListener("click",() => {
      if(document.getElementById("buscador").value.length > 1){           //Agarra el valor del input solo si es mayor a 1 sino agarra undefined
        setBuscarPelicula(document.getElementById("buscador").value)      //Valor del input buscar
      }
    })
  })

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ backgroundColor: "#FFD369" }}
      >
        <Container style={{ marginBottom: '60px' }}>
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
                <NavDropdown.Item as={Link} to={`/generos/28`}>Acción</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/generos/12`}>Aventura</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/generos/35`}>Comedia</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/generos/99`}>Documental</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/generos/53`}>Misterio</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/generos/37`}>Western</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/generos/10749`}>Romance</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/generos/16`}>Animacion</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/generos/10752`}>Guerra</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/generos/878`}>Ciencia Ficcion</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/generos/18`}>Drama</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/generos/14`}>Fantasia</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/generos/10402`}>Musical</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/generos/27`}>Terror</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={`/generos/36`}>Histora</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/sobreNosotros">Sobre Nosotros</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                id="buscador"
              />
              <Link to={`/buscarPelicula/${buscarPelicula}`}>
                <Button id="buscar" variant="primary">Buscar</Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
