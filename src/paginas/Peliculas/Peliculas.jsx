import React, { useEffect, useState } from 'react'
import NavigationBar from "../../componentes/navBar/navigationBar";
import Footer from "../../componentes/Footer/Footer";
import { Row, Container, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./PeliculasStyle.css";

const Peliculas = () => {

  const [appState, setAppState] = useState({
    loading: false, // Le asignamos el estado falso como inicial
    repos: null,    // Lo iniciamos en null para compararlo mas adelante en un condicional
  });

  useEffect(() => {
    /* Cargamos los datos de la API. Le asignoamos la url de la API a la variable "apiURL" y a traves de los headers le pasamos los parametros que nos solicita para acceder, ya que la API es privada.*/
    setAppState({ loading: true });
    const apiUrl = 'https://movies-app1.p.rapidapi.com/api/movies';
    fetch(apiUrl, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "movies-app1.p.rapidapi.com",
        "x-rapidapi-key": "32d6f1946emshd01b80456f42b38p1566bdjsn6a1d1e0303cc" // aca pasamos la key, si no no funciona la api
      }
    })
      .then((res) => res.json()) // devolvemos el JSON
      .then((repos) => {
        setAppState({ loading: false, repos: repos }); //Usamos setAppState para cambiar el valor de repos que antes valia null
      });
  }, [setAppState]);

  return (

    <Container>
      <Row>
        <NavigationBar />
      </Row>
      <Row>
        <Col className="col-3 foto">
          <h1>Foto</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum expedita consequatur aliquid beatae minima!</p>
        </Col>
        <Col className="col-6 letra txtleft">
          <Row className="h-50" >
            <h3>Titulo Original</h3>
            <h4>Sinopsis</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam ipsam iure, perspiciatis quibusdam minima tempore necessitatibus error illo ut?</p>
          </Row>
          <Row>
            <p>Año:</p>
            <p>Actores:</p>
            <p>Director:</p>
            <p>Generos:</p>
          </Row>
        </Col>
      </Row>
      <Row className= "mgt">
        <form >
        <div>
          <textarea class="textarea" id="form4Example3" rows="3" placeholder="Escribi tu comentario"></textarea>
          <label class="form-label" for="form4Example3" ></label>
        </div>
          <button type="submit" class="btn btn-block mb-4 letra">
            Comentar
          </button>
        </form>
      </Row>
      <Footer />
    </Container>

  );
}

export default Peliculas;
