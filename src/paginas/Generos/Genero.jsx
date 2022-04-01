import React, { useState, useEffect } from 'react'
import { Row, Container, Col, Button, Card } from "react-bootstrap";
import NavigationBar from "../../componentes/navBar/navigationBar";
import Footer from "../../componentes/Footer/Footer";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
const API_IMG = "https://image.tmdb.org/t/p/w500"
const apiKey = process.env.REACT_APP_API;

const Genero = () => {

  let { genero } = useParams()

  const [appState, setAppState] = useState({
    loading: true, // Le asignamos el estado true como inicial
    repos: undefined, // Lo iniciamos en null para compararlo mas adelante en un condicional
  });

  useEffect(() => {
    let apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=24c3023d283ecae1f5d3ab494944bf29&with_genres=${genero}&language=es-ES`;
    /* Cargamos los datos de la API. Le asignoamos la url de la API a la variable "apiURL" y a traves de los headers le pasamos los parametros que nos solicita para acceder, ya que la API es privada.*/
    fetch(apiUrl)
      .then((res) => res.json()) // devolvemos el JSON
      .then((repos) => {
        setAppState({ loading: false, repos: repos }); //Usamos setAppState para cambiar el valor de repos que antes valia null
      });
  }, [genero]);

  if (!appState.repos || appState.repos.length === 0)return <p>LA PELICULA NO CARGO</p>;
  console.log(appState.repos)


  return (
    <Container>
      <NavigationBar />
      <Row className="g-4">
          {appState.repos.results.map((repo) => {
            return (
              <Card bg="dark"
                variant="light"
                style={{ width: "15rem" }}>
                <Link to={`/Peliculas/${repo.id}`}>
                  <Card.Img variant="top" src={API_IMG + repo.poster_path} />
                </Link>
                <Card.Body>
                  <Card.Title>{repo.title}</Card.Title>
                  <Card.Title>{repo.release_date}</Card.Title>
                  <Card.Text>{repo.vote_average}</Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            )
          })}
        </Row>
      <Footer />
    </Container>
  )
}

export default Genero