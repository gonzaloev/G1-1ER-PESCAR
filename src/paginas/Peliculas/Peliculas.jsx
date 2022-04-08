import React, { useEffect, useState } from "react";
import NavigationBar from "../../componentes/navBar/navigationBar";
import Footer from "../../componentes/Footer/Footer";
import { Row, Container, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./PeliculasStyle.css";
import { Link } from "react-router-dom";
import { Loader } from "../../componentes/Loader/Loader";
import "./PeliculasStyle.css";
import YouTube from "react-youtube";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const apiKey = process.env.REACT_APP_API;
const API_IMG = "https://image.tmdb.org/t/p/w500";

const Peliculas = () => {
  const { id } = useParams();
  /* const [playing, setPlaying] = useState(false) */

  /* const [trailer, setTrailer] = useState(null); */
  const [appState, setAppState] = useState({
    loading: true, // Le asignamos el estado falso como inicial
    repos: undefined, // Lo iniciamos en null para compararlo mas adelante en un condicional
  });
  const [appVideos, setAppVideos] = useState({
    loading: false, // Le asignamos el estado falso como inicial
    videos: undefined, // Lo iniciamos en null para compararlo mas adelante en un condicional
  });


  //https://github.com/dom-the-dev/movie-trailer-app/blob/main/src/App.js

  const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";


  useEffect(() => {
    /* Cargamos los datos de la API. Le asignoamos la url de la API a la variable "apiURL" y a traves de los headers le pasamos los parametros que nos solicita para acceder, ya que la API es privada.*/
    let apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos&include_videos_language=es-ES&primary_release_year`;

    console.log(apiUrl)

    fetch(apiUrl)
      .then((res) => res.json()) // devolvemos el JSON
      .then((repos) => {
        setAppState({ loading: false, repos: repos }); //Usamos setAppState para cambiar el valor de repos que antes valia null
      });

  }, [setAppState]);



  if (!appState.repos || appState.repos.length === 0) return <Loader/>;



  const yearDate = appState.repos.release_date;


  return (
    <>
      <div
        className="hero fondoImg"
        style={{
          backgroundImage: `url('${IMAGE_PATH}${appState.repos.backdrop_path}')`,
        }}
      >

        <div className="hero-content max-center">




          <h1 className="hero-title" style={{ color: '#f2c966', textShadow: " 4px 4px 3px black" }}>{appState.repos.original_title}</h1>
          {/* {appState.repos.overview ? (
            <p className={"hero-overview"}>{appState.repos.overview}</p>
            ) : null} */}
        </div>
      </div>
      <Row>
        <NavigationBar />
      </Row>

      <Container>
        <div
          style={{
            color: "white",
            textAlign: "left",
            margin: "20px",
            fontWeight: "bold",
          }}
        >
          <Link
            as={Link}
            to="/"
            style={{ textDecoration: "none", color: "rgba(253,231,22)" }}
          >
            Inicio
          </Link>{" "}
          » {appState.repos.original_title}
        </div>

        <Row>
          <Col className="col-3 " xs>
            <Zoom>
              <div >
                <picture className="image">
                  <div className="image__img">
                    <Card.Img id="custom" src={API_IMG + appState.repos.poster_path} />
                    <div className="image__overlay">
                    </div>
                  </div>

                </picture>
              </div>


            </Zoom>
          </Col>

          <Col className="letra txtleft flex-end">
            <p style={{textShadow: "-2px 0px 3px black", maxWidth: "750px", fontSize:"20px", textAlign:"justify"}}>
              <i>{appState.repos.overview}</i>
            </p>
            <Row className="lista">
              <p style={{textShadow: "-2px 0px 3px black"}}>
                <b>Año:</b> {appState.repos.release_date}
              </p>
              <p style={{textShadow: "-2px 0px 3px black"}}>
                <b>Generos:</b> {appState.repos.genres[0].name}
              </p>
              <p style={{textShadow: "-2px 0px 3px black"}}>
                <b>País:</b> {appState.repos.production_countries[0].name}
              </p>
              <p style={{textShadow: "-2px 0px 3px black"}}>
                <b>Lanzamiento:</b> {appState.repos.release_date}
              </p>
              <p>
                <b>Calificacion:</b> {appState.repos.vote_average}
              </p>
              <hr />
            </Row>
          </Col>
        </Row>
        <Row>
          <YouTube videoId={appState.repos.videos.results[0].key} className={"custom"} />
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Peliculas;
