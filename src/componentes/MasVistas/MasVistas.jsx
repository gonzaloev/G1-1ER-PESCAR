import React, { Component } from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { Loader } from "../Loader/Loader";

/* import "../MasVistas/MasVistasElements.css" */

const MasVistas = (props) => {
  const { repos } = props;

  if (!repos || repos.length === 0) return <Loader/>;

  return (
      <Container className="mx-auto my-5 letra">
              <h1>Más Vistas</h1>
        <Row className="g-4 justify-content-md-center">
          {repos.results.map((repo) => {
            return (
              <Card
                bg="rgb(34, 40, 49)"
                variant="light"
                /* style={{ maxWidth: "20rem" }} */ style={{ width: "15rem" }}
                animation="glow"
              >
                <Card.Img
                  variant="top"
                  src={repo.image}
                  style={{ height: "395px" }}
                />
                <Card.Body>
                  <Card.Title>{repo.title}</Card.Title>
                  <Card.Text>{repo.rating}</Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
  );
};

export default MasVistas;
