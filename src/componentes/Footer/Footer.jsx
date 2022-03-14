import React from "react";
import { 
  Container,
  Row,
  Col,
  ListGroup,
  Card,
  Button,
  div
} from "react-bootstrap";
import { alignPropType } from "react-bootstrap/esm/types";
import './footer.css'
import Logo1 from "../../componentes/Footer/tecnologias/csslogo.png"
import Logo2 from "../../componentes/Footer/tecnologias/nodejslogo.png"
/* import Container from "react-bootstrap" */

const Footer = () => {
return (

  <div className="footerdiv">

	<Container className="footercontainer">
        
        
    <Row className="footerrow">
      
      <blockquote className="blockquote mb-0">
        <p>{' '}Si quieres quitar el hambre a un hombre dale un pez. Pero si quieres que no vuelva a tener hambre, enséñale a Pescar.{' '}</p>
        <p className="blockquote-footer">Fundación Pescar / <cite title="Source Title">Lao Tsé</cite></p>
      </blockquote>
    </Row>

<Row>
{/* 


<Col>
<Button className="ButtonLink1" variant="link">Sobre Nosotros
  <img src={Logo1} alt="logo css" style={
    {
      maxWidth:'80px'
    }
  }/>

  <img src={Logo2} alt="logo nodejs" style={
    {
      maxWidth:'80px'
    }}
    />
</Button>
</Col>

  */}

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
{/* infinite Logo Carouselhttps://jsfiddle.net/solodev/f6obs8mx/ */}

<Row>
  <p className="footerp">Página desarrollada por Luciana Carolina Paredes, Gonzalo Valiño, Axel Roldan y Lucas Gabriel Velasco.</p>
</Row>

	</Container>
  </div>
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