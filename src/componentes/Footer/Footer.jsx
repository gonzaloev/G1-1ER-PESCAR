import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup
} from "react-bootstrap";
import "./FooterStyles.css"
/* import Container from "react-bootstrap" */

const Footer = () => {
  return (
    <div className="estilo letra" >
      <Row className="margen20px">
        <Col classname="margenLateral">
          <h2 class="letra">Proyecto Moovies</h2>
          <br></br>
          <p>Proyecto independiente realizado por alumnos de la Fundacion Pescar con el proposito de poner a prueba el trabajo en equipo, el compromiso y responsabilidad y el objetivo de potenciar las habilidades professionales con las ultimas tecnologias del mercado</p>
          <p>Cada uno de nosotros aspiramos a ser Front-End Developers o Full-stack en el mercado laboral, tenemos lo que se necesita y apuntamos a formar parte de equipos de trabajos disciplinados, con un marco de trabajo definido y un lider nato</p>
        </Col>
        <Col classname="margenLateral">
          <h3 class="letra">Agradecimientos</h3>
          <br></br>
          <p><a href="https://www.linkedin.com/in/maria-bereterbide-210a15165/" target="_blank">Maria Bereterbide</a></p>
          <p><a href="http://www.pescar.org.ar/wp/" target="_blank">Fundacion Pescar</a></p>
          <p><a href="https://www.santander.com.ar/banco/online/personas" target="_blank">JP Morgan</a> / <a href="https://www.jpmorgan.com/AR/es/about-us" target="_blank">Santander Rio</a></p>
        </Col>
      </Row >
      <Row>
        <Col className="borde" >
          <h4>Linkedin</h4>
          <div class="redes">
            <ul>
              <li><a href="#">Gonzalo Valiño</a></li>
              <li><a href="https://www.linkedin.com/in/axel-sebastian-roldan-358b78171/" target="_blank">Axel Roldan</a></li>
              <li><a href="#">Luciana Paredes</a></li>
              <li><a href="#">Lucas Velasco</a></li>
            </ul>
          </div>
        </Col>
        <Col>
        <h4>Git Repo</h4>
          <div class="redes">
            <ul>
              <li><a href="#">Gonzalo Valiño</a></li>
              <li><a href="">Axel Roldan</a></li>
              <li><a href="#">Luciana Paredes</a></li>
              <li><a href="#">Lucas Velasco</a></li>
            </ul>
          </div>
        </Col>
        <Col>
        <h4>Email</h4>
          <div class="redes">
            <ul>
              <li><a href="#">Gonzalo Valiño</a></li>
              <li><a href="#">Axel Roldan</a></li>
              <li><a href="#">Luciana Paredes</a></li>
              <li><a href="#">Lucas Velasco</a></li>
            </ul>
          </div>
        </Col>

      </Row>
    </div>
  );
};
export default Footer;