import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Carousel,
} from "react-bootstrap";
import { alignPropType } from "react-bootstrap/esm/types";
import './footer.css' 




{/* 
import Logo1 from "../../componentes/Footer/tecnologias/csslogo.png"
import Logo2 from "../../componentes/Footer/tecnologias/nodejslogo.png" */}
/* import Container from "react-bootstrap" */

const Footer = () => {
  return (

/* container -- row -- col */
<>


      <Container style={{color:'white'}}
      className="footerdiv" variant="light" bg="dark">


        <Row>


          <Col>
            <Row>
              <Button className="ButtonLink" variant="link">Sobre Nosotros</Button>

            </Row>
          </Col>

          <Col>
            {/* <Button className="ButtonLink1" variant="link">Sobre Nosotros</Button> */}
            <Button className="ButtonLink" variant="link">Tecnologías usadas</Button>
          </Col>

          <Col>
            <Button className="ButtonLink" variant="link">Patrocinadores</Button>
          </Col>

        </Row>

        <Row>
          <p className="footerp">Página desarrollada por Luciana Carolina Paredes, Gonzalo Valiño, Axel Roldan y Lucas Gabriel Velasco.</p>
        </Row>

      </Container>
      
    <Carousel/>
    </>
  );
};
export default Footer;




{/* 
<h2> <a href="http://" >Sobre Nosotros</a></h2>
<p>Somos compañeros de la fundación Pescar, creamos esta página web con motivo de realizar la primera cohorte</p>
 */}

{/* 

      <Col>Acerca de Nosotros
      <ul>
        <li href="#">1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      </Col>


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
*/}

{/*  linea divisoria
    


<Container>
  <img src="logofooter.png" alt="" />
</Container>
    
*/}