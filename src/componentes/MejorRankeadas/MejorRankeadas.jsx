import React from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "./MejorRankeadas.css";
import {Link} from "react-router-dom"
const API_IMG="https://image.tmdb.org/t/p/w500"

const MejorRankeadas = (props, poster_path) => {
  const { repos } = props;


  if (!repos || repos.length === 0) return <p>no se logro cargar la pelicula</p>;
  
  return (
    <>
      <h1>Mejor Rankeadas </h1>
      <Container className="mx-auto my-5 letra">
        <Row className="g-4">
          {repos.results.map((repo) => {
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
      </Container>
    </>
  );
};

export default MejorRankeadas;
