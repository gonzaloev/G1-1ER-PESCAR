import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup
} from "react-bootstrap";
import "./FooterStyles.css"

const Footer = () => {
  return (
    <div className="estilo letra" >
      <Row className="margen20px">
        <Col classname="margenLateral">
          <div class="margenLateral">
            <h2 class="letra">Proyecto Moovies</h2>
            <br></br>
            <p style={{textShadow: "-2px 0px 4px black"}}>Proyecto independiente realizado por alumnos de la Fundacion Pescar con el proposito de poner a prueba el trabajo en equipo, el compromiso y responsabilidad y el objetivo de potenciar las habilidades professionales con las ultimas tecnologias del mercado</p>
            <p style={{textShadow: "-2px 0px 4px black"}}>Cada uno de nosotros aspiramos a ser Front-End Developers o Full-stack en el mercado laboral, tenemos lo que se necesita y apuntamos a formar parte de equipos de trabajos disciplinados, con un marco de trabajo definido y un lider nato</p>
          </div>
        </Col>
      </Row >
      <Row>
        <Col className="borde" >
          <h4>Linkedin</h4>
          <div class="redes">
            <ul>
              <li><a href="https://www.linkedin.com/in/gonzalo-valino/" target="_blank">Gonzalo Valiño</a></li>
              <li><a href="https://www.linkedin.com/in/axel-sebastian-roldan-358b78171/" target="_blank">Axel Roldan</a></li>
              <li><a href="https://www.linkedin.com/in/lucianacparedes/" target="_blank">Luciana Paredes</a></li>
              <li><a href="https://www.linkedin.com/in/lucas-gabriel-velasco-437b22228/" target="_blank">Lucas Velasco</a></li>
            </ul>
          </div>
        </Col>
        <Col>
          <h4>Git Repo</h4>
          <div class="redes">
            <ul>
              <li><a href="https://github.com/gonzaloev" target="_blank">Gonzalo Valiño</a></li>
              <li><a href="https://github.com/AxelRoldan" target="_blank">Axel Roldan</a></li>
              <li><a href="https://github.com/Lucparedes" target="_blank">Luciana Paredes</a></li>
              <li><a href="https://github.com/LucasGabrielVelasco" target="_blank">Lucas Velasco</a></li>
            </ul>
          </div>
        </Col>
        <Col>
          <h4>Email</h4>
          <div class="redes">
            <ul>
              <li><a href="mailto:gonzaloevalino@gmail.com">Gonzalo Valiño</a></li>
              <li><a href="mailto:AxelRoldan@outlook.es">Axel Roldan</a></li>
              <li><a href="mailto:lucianacparedes@gmail.com">Luciana Paredes</a></li>
              <li><a href="mailto:velascolucasgabriel@gmail.com">Lucas Velasco</a></li>
            </ul>
          </div>
        </Col>
        <Col classname="margenLateral">
          <h4 class="letra">Agradecimientos</h4>
          <ul>
            <li><a href="https://www.linkedin.com/in/maria-bereterbide-210a15165/" target="_blank">Maria Bereterbide</a></li>
            <li><a href="http://www.pescar.org.ar/wp/" target="_blank">Fundacion Pescar</a></li>
            <li><a href="https://www.santander.com.ar/banco/online/personas" target="_blank">JP Morgan</a></li>
            <li><a href="https://www.jpmorgan.com/AR/es/about-us" target="_blank">Santander Rio</a></li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};
export default Footer;