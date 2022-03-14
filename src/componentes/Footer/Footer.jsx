import React from "react";
import { 
  Container,
  Row,
  Col,
  ListGroup,
  Card,
} from "react-bootstrap";
import { alignPropType } from "react-bootstrap/esm/types";



/* import Container from "react-bootstrap" */

const Footer = () => {
return (
	<Container>
    <Row>
      <h2>Sobre Nosotros</h2>
        <blockquote className="blockquote mb-0">
      <p>{' '}Si quieres quitar el hambre a un hombre dale un pez. Pero si quieres que no vuelva a tener hambre, enséñale a Pescar.{' '}</p>
      <footer className="blockquote-footer">Fundación Pescar / <cite title="Source Title">Lao Tsé</cite></footer>
        </blockquote>

<p>Somos compañeros de la fundación Pescar, creamos esta página web con motivo de realizar la primera cohorte</p>
 
    </Row>

{/* 

      <Col>Acerca de Nosotros
      <ul>
        <li href="#">1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      </Col>
*/}

<Row>
      
<Col>Equipo de Desarrolladores 
        <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item action href="#link1">
          Lucas GV
          </ListGroup.Item>
          <ListGroup.Item action href="#link2">
          Gonzalo V
          </ListGroup.Item>
          <ListGroup.Item action href="#link3">
          Áxel R
          </ListGroup.Item>
          <ListGroup.Item action href="#link4">
          Luciana CP
          </ListGroup.Item>
        </ListGroup>
        </Col>
    
      <Col>Tecnologías utilizadas
      <ul>
        <li>HTML, CSS</li>
        <li>JAVASCRIPT, NODE.JS</li>
        <li>BOOSTRACK</li>
      </ul>
      </Col>
      
        </Row>

    

 

	</Container>
);
};
export default Footer;