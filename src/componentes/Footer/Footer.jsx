import React from "react";
import { 
  Container,
  Row,
  Col,
  ListGroup  
} from "react-bootstrap";


/* import Container from "react-bootstrap" */

const Footer = () => {
return (
	<Container>
    <Row>
      <h2>Footer MK1</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, numquam excepturi. Cum sint, voluptas autem impedit doloribus facilis? Voluptatum itaque blanditiis explicabo a aut. Aliquam dolore earum doloribus non dolorum optio cupiditate. Eos ex sit dicta quasi tempora voluptas doloremque illum consequuntur porro beatae odio, ab impedit, fugiat eaque minus adipisci!</p>
      
    </Row>
    <Row>
      <Col>Acerca de Nosotros
      <ul>
        <li href="#">1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      </Col>
      <Col>Servicios
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      </Col>
      <Col>Contactenos
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      </Col>
      <Col>Redes Sociales
        <ListGroup defaultActiveKey="#link1">
          <ListGroup.Item action href="#link1">
          Link 1
          </ListGroup.Item>
          <ListGroup.Item action href="#link2">
          Link 2
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
	</Container>
);
};
export default Footer;