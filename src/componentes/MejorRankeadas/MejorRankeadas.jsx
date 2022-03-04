import React from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";

function MejorRankeadas() {
  return (
    <>
       {/* A todo esto habria que hacer un script para que busque y mapee dentro de la card con cada pelicula diferente */}
    <Container  className="mx-auto my-5 " fluid="md">
        <h1>Mejor Rankeadas </h1>
      <Row className="g-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col xs lg={true}>
            <Card>
              <Card.Img variant="top" src="https://i.blogs.es/dd7dab/matrix/450_1000.jpg" />
              <Card.Body>
                <Card.Title>Matrix Resurrections</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
    </>
  );
}

export default MejorRankeadas;
