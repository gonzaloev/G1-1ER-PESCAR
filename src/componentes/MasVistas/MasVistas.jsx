import React, { Component } from "react";

import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
/* import "../MasVistas/MasVistasElements.css" */

const MasVistas = (props) => {
  const { repos } = props;

  if (!repos || repos.length === 0) return <p></p>;

  /* CORREGIR BIEN COMO PASA LA CARTA */

  return (
    <ul>
      <h1>Más Vistas</h1>
      {repos.results.map((repo) => {
        return (
          <Container className="mx-auto my-5 ">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={repo.image} />
              <Card.Body>
                <Card.Title>{repo.title}</Card.Title>
                <Card.Text>{repo.rating}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Container>
        );
      })}
    </ul>
  );
};

export default MasVistas;
