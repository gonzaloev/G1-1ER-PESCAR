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
const API_IMG="https://image.tmdb.org/t/p/w500"

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
      }

      servidor.addEventListener("click", (e) => {
        setUrl(e.target.value);
      });
    }
  });

  if (!appState.repos || appState.repos.length === 0)
    return <p>LA PELICULA NO CARGO</p>;

    console.log(appState.repos)
  return (
    <Container>
      <Row>
        <NavigationBar />
      </Row>
      <h3 style={{color:'red'}}>{appState.repos.original_title}</h3>
      <div style={{color:'white', textAlign:'left', margin:'20px', fontWeight:'bold'}}>
        <Link as={Link} to="/" style={{textDecoration:'none', color:'rgba(253,231,22)'}}>Inicio</Link> » {appState.repos.original_title}
      </div>
      <Row>
        {/*<iframe width="1080" height="600" src={url} frameborder="0"></iframe>*/}
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
          {/*appState.repos.result.embedUrls.map((pelicula) => {
            return (
              <Col>
                <Button value={pelicula.url}>{pelicula.server}</Button>
              </Col>
            );
            */})}
        </Row>
      </Row>
        </div>
      </Collapse>
      <Row>
        <Col className="col-3 " xs>
          <Card.Img src={API_IMG + appState.repos.poster_path}/>
        </Col>

        <Col className="letra txtleft flex-end">
          <h1>{appState.repos.original_title}</h1>
          {/* <h3>Sinopsis</h3> */}
          <p><i>{appState.repos.overview}</i></p>
          <Row className="lista">
          <p><b>Año:</b> {appState.repos.release_date}</p>
          <p><b>Generos:</b> {appState.repos.genres[0].name}</p>
          <p><b>País:</b> {appState.repos.production_countries[0].name}</p>
          <p><b>Lanzamiento:</b> {appState.repos.release_date}</p>
          <p><b>Calificacion:</b> {appState.repos.vote_average}</p>
          <hr />
          </Row>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default Peliculas;
