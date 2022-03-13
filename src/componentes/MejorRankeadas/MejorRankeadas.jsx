import React from "react";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { OverlayTrigger } from "react-bootstrap";
import { Popover } from "react-bootstrap";
import './MejorRankeadas.css'

const MejorRankeadas = (props) =>{

  
  
    const { repos } = props;
    if (!repos ||  repos.length === 0) return <p>No hay pelis, intentar de otra forma.</p>
  
  return (
    <>
      {/* FALTA CAMBIAR TODO ESTE COMPONENTE, IGNORAR POR EL MOMENTO */}
      {repos.results.map((repo) => 
      <Container className="mx-auto my-5 " fluid="md">
        <h1>Mejor Rankeadas </h1>
        <div key={repo.id}>
        <Row className="g-4">
          {Array.from({ length: 21 }).map((_, idx) => (
            <Col xs lg={true}>
              {["right"].map((repo) => (
                <OverlayTrigger
                  key={repo}
                  placement={repo}
                  overlay={
                    <Popover id={`popover-positioned-${repo}`} >
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
                          <span><strong>Descripcion: </strong> {repo.id}.</span>
                          <br></br>
                          <span><strong>Descripcion: </strong> {repo.title}.</span>
                          <span><strong>Descripcion: </strong> {repo.description}.</span>
                          <br></br>
                          <span><strong >Directores: </strong> {repo.directors}</span>
                          <br></br>
                          <span><strong >Actores: </strong> {repo.actors}</span>
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
        </div>
      </Container>
      )}
    </>
  );
}

export default MejorRankeadas