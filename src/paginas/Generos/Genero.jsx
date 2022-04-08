import React, { useState, useEffect } from 'react'
import { Row, Container, Col, Button, Card } from "react-bootstrap";
import NavigationBar from "../../componentes/navBar/navigationBar";
import Footer from "../../componentes/Footer/Footer";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Loader } from '../../componentes/Loader/Loader';
import Logo from "../../componentes/Logo/Logo";
import "../Peliculas/PeliculasStyle.css";
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

  if (!appState.repos || appState.repos.length === 0 )return <Loader/>;

  return (
    <div>
      <NavigationBar />
      <Logo/>
      <Container>
       <Row className="g-4 justify-content-md-center">
          {appState.repos.results.map((repo) => {
            return (
              <Card bg="rgb(34, 40, 49)"
                variant="light"
                id="hola">
                <Link to={`/Peliculas/${repo.id}`}>
                  <Card.Img variant="top" id="custom" src={API_IMG + repo.poster_path} />
                </Link>
                  <Card.Title style={{paddingTop:"15px", color:"rgb(255, 211, 105)"}}>{repo.title}</Card.Title>
                  <Card.Title style={{color:"rgb(255, 211, 105)"}}>{repo.release_date.slice(0,4)}</Card.Title>
                  <Card.Text style={{color:"rgb(255, 211, 105)"}}>⭐{repo.vote_average}</Card.Text>
              </Card>
            )
          })}
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Genero