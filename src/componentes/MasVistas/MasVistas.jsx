import React, { Component } from 'react';

import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
/* import "../MasVistas/MasVistasElements.css" */

function MasVistas() {
  
   
  return (
    
    <>
    
    {/* A todo esto habria que hacer un script para que busque y mapee dentro de la card con cada pelicula */}
    <Container   className="mx-auto my-5 "/* fluid="md" */>
        <h1>Mas Vistas</h1>
      {/* <Row xs={1} md={4} className="g-4"  > */}
      {/* <Row className="justify-content-md-center"> */}
      <Row className="g-4">
        {Array.from({ length: 14 }).map((_, idx) => (
           <Col xs lg={true}>
             <Card bg="secondary" style={{maxWidth:"170px"}}>
              <Card.Img variant="top" src="https://i.blogs.es/dd7dab/matrix/450_1000.jpg"/>
              <Card.Body>
                <Card.Title>Matrix Resurrections 2021</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
     
    </>
  );
}

export default MasVistas;
