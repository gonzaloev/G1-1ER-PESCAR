import React from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { OverlayTrigger } from "react-bootstrap";
import { Popover } from "react-bootstrap";
import './MejorRankeadas.css'
import Movies from "../ApiPeliculas/Movies";

function MejorRankeadas() {
  return (
    <>
      {/* A todo esto habria que hacer un script para que busque y mapee dentro de la card con cada pelicula diferente */}
      <Container className="mx-auto my-5 " fluid="md">
        <h1>Mejor Rankeadas </h1>
        <Row className="g-4">
          {Array.from({ length: 21 }).map((_, idx) => (
            <Col xs lg={true}>
              {["right"].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Popover id={`popover-positioned-${placement}`} >
                      <Popover.Header as="h3" style={{ color:'black', backgroundColor: 'rgba(52, 52, 52, 0.0)'  }}>{`Matrix Revolutions 2021 `}</Popover.Header>
                      <Popover.Body 
                        style={{
                          backgroundImage:  `URL("https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/12/the_matrix_resurrections_lana_wachowski_5.jpg?fit=1200%2C800&ssl=1")`,
                          backgroundRepeat: "no-repeat",
                          
                          width: "250px",
                          height: "250px",
                          backgroundSize: "350px 250px",
                          backgroundPositionX:
                            "-48px" /* filter: `blur(10px)` */
                        }}
                      >
                        <div  className="bgText" >
                          <strong>Descripcion: </strong> Matrix.
                          <br></br>
                          <strong >Directores: </strong> Hermanas Wachowski.
                          <br></br>
                          <strong >Actores: </strong> Keanu Reeves, la que hace de Trinity, el que hace del Grone, y los otros.
                        </div>
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <Card bg="secondary" style={{ maxWidth: "170px" }}>
                    <Card.Img
                      variant="top"
                      src="https://i.blogs.es/dd7dab/matrix/450_1000.jpg"
                    />
                    <Card.Body>
                      <Card.Title>Matrix Resurrections</Card.Title>
                    </Card.Body>
                  </Card>
                </OverlayTrigger>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default MejorRankeadas;
