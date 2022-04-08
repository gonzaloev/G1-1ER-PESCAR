import React from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import "./MejorRankeadas.css";
import {Link} from "react-router-dom"
const API_IMG="https://image.tmdb.org/t/p/w500"

const MejorRankeadas = (props, poster_path) => {
  const { repos } = props;

  

  if (!repos || repos.length === 0) return <p>no se logro cargar la pelicula</p>;
  
  return (
    <>
      <Container className=" my-5 letra " style={{backgroundColor:"#222831"}}>
        <Row className="g-4 justify-content-md-center">
          {repos.results.map((repo) => {
            return (
              <Card  bg="rgb(34, 40, 49)"
                variant="light"
                id="hola">
                <Link to={`/Peliculas/${repo.id}`}>
                  <Card.Img variant="top" id="custom" src={API_IMG + repo.poster_path} />
                </Link>
                  <Card.Title style={{paddingTop:"15px"}}>{repo.title.toUpperCase()}</Card.Title>
                  <Card.Title>{repo.release_date.slice(0,4)}</Card.Title>
                  <Card.Text>⭐ {repo.vote_average}</Card.Text>
              </Card>
            )
          })}
        </Row>
      </Container>
    </>
  );
};

export default MejorRankeadas;
