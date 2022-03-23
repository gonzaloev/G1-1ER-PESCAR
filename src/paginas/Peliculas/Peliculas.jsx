import React, { useEffect, useState } from 'react'
import NavigationBar from "../../componentes/navBar/navigationBar";
import Footer from "../../componentes/Footer/Footer";
import { Row, Container, Col, Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom"
import "./PeliculasStyle.css";

const Peliculas = () => {

  const { id } = useParams()

  const [appState, setAppState] = useState({
    loading: true, // Le asignamos el estado falso como inicial
    repos: undefined,    // Lo iniciamos en null para compararlo mas adelante en un condicional
  });

  const [url,setUrl] = useState(undefined)

  useEffect(() => {
    /* Cargamos los datos de la API. Le asignoamos la url de la API a la variable "apiURL" y a traves de los headers le pasamos los parametros que nos solicita para acceder, ya que la API es privada.*/
    const apiUrl = 'https://movies-app1.p.rapidapi.com/api/movie/' + id;

    fetch(apiUrl, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "movies-app1.p.rapidapi.com",
        "x-rapidapi-key": "d8e18551b2mshec99f566b716819p135e54jsn84665705b4b0" // aca pasamos la key, si no no funciona la api
      }
    })
      .then((res) => res.json()) // devolvemos el JSON
      .then((repos) => {
        setAppState({ loading: false, repos: repos }); //Usamos setAppState para cambiar el valor de repos que antes valia null
      });
  }, [setAppState]);

  useEffect(()=>{
    if(!appState.loading ){

      let servidor = document.getElementById("selPelicula")
      
      if(url == undefined){
        setUrl(appState.repos.result.embedUrls[0].url)
      }

      servidor.addEventListener("click",(e) => {   
        setUrl(e.target.value)
      })
    }
  })

  if (!appState.repos || appState.repos.length === 0) return <p>LA PELICULA NO CARGO</p>;

  return (

    <Container>
      <Row>
        <NavigationBar />
      </Row>
      <Row>
        <Col className="col-3 " xs>
          <Card.Img src={appState.repos.result.image} />
        </Col>
        <Col className="letra txtleft flex-end">
          <h1>{appState.repos.result.title}</h1>
          <h3>Sinopsis</h3>
          <p>{appState.repos.result.description}</p>
          <p>Año: {appState.repos.result.year}</p>
          <p>Generos: {appState.repos.result.genres[0].name}</p>
          <p>Calificacion: {appState.repos.result.rating}</p>
          <p>Lanzamiento: {appState.repos.result.release}</p>
        </Col>
      </Row>
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
      <Row>
        <iframe width="1080" height="600" src={url} frameborder="0" ></iframe>
      </Row>
      <Footer />
    </Container>

  );

}


export default Peliculas;
