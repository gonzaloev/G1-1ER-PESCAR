import React, { useEffect, useState } from "react";
import NavigationBar from "../../componentes/navBar/navigationBar";
import Footer from "../../componentes/Footer/Footer";
import { Row, Container, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Collapse } from "react-bootstrap";
import "./PeliculasStyle.css";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
const apiKey = process.env.REACT_APP_API;

const Peliculas = () => {
  const { id } = useParams();

  const [appState, setAppState] = useState({
    loading: true, // Le asignamos el estado falso como inicial
    repos: undefined, // Lo iniciamos en null para compararlo mas adelante en un condicional
  });

  const [url, setUrl] = useState(undefined);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    /* Cargamos los datos de la API. Le asignoamos la url de la API a la variable "apiURL" y a traves de los headers le pasamos los parametros que nos solicita para acceder, ya que la API es privada.*/
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    fetch(apiUrl)
      .then((res) => res.json()) // devolvemos el JSON
      .then((repos) => {
        setAppState({ loading: false, repos: repos }); //Usamos setAppState para cambiar el valor de repos que antes valia null
      });
  }, [setAppState]);

  useEffect(() => {
    


    if (!appState.loading) {
      let servidor = document.getElementById("selPelicula");

      if (url == undefined) {
        setUrl(appState.repos.result.embedUrls[0].url);
      }

      servidor.addEventListener("click", (e) => {
        setUrl(e.target.value);
      });
    }
  });

  if (!appState.repos || appState.repos.length === 0)
    return <p>LA PELICULA NO CARGO</p>;

  return (
    <Container>
      <Row>
        <NavigationBar />
      </Row>
      <h3 style={{color:'red'}}>{appState.repos.result.title}</h3>
      <div style={{color:'white', textAlign:'left', margin:'20px', fontWeight:'bold'}}>
        <Link as={Link} to="/" style={{textDecoration:'none', color:'rgba(253,231,22)'}}>Inicio</Link> » {appState.repos.result.title}
      </div>
      <Row>
        <iframe width="1080" height="600" src={url} frameborder="0"></iframe>
      </Row>
      
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        style={{margin:'20px'}}
      >
        Servidores
      </Button>
      <Collapse in={open}>
        <div>
        <Row>
        <Row id="selPelicula">
          {appState.repos.result.embedUrls.map((pelicula) => {
            return (
              <Col>
                <Button value={pelicula.url}>{pelicula.server}</Button>
              </Col>
            );
          })}
        </Row>
      </Row>
        </div>
      </Collapse>
      <Row>
        <Col className="col-3 " xs>
          <Card.Img src={appState.repos.result.image} />
        </Col>

        <Col className="letra txtleft flex-end">
          <h1>{appState.repos.result.title}</h1>
          {/* <h3>Sinopsis</h3> */}
          <p><i>{appState.repos.result.description}</i></p>
          <Row className="lista">
          <p><b>Año:</b> {appState.repos.result.year}</p>
          <p><b>Generos:</b> {appState.repos.result.genres[0].name}</p>
          <p><b>País:</b> {appState.repos.result.countries[0].name}</p>
          <p><b>Lanzamiento:</b> {appState.repos.result.release}</p>
          <p><b>Calificacion:</b> {appState.repos.result.rating}</p>
          <hr />
          </Row>
        </Col>
      </Row>
 
      <Footer />
    </Container>
  );
};

export default Peliculas;
