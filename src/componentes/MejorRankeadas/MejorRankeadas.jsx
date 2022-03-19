import React from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import "./MejorRankeadas.css";
import {Link} from "react-router-dom"

const MejorRankeadas = (props) => {
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
                <Link to={`/Peliculas/${repo._id}`}>
                  <Card.Img variant="top" src={repo.image} style={{ height: "395px" }} />
                </Link>
                <Card.Body>
                  <Card.Title>{repo.title}</Card.Title>
                  <Card.Text>{repo.rating}</Card.Text>
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
