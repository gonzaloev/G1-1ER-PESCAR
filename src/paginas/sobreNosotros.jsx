import React from 'react'
import Footer from "../componentes/Footer/Footer";
import NavigationBar from "../componentes/navBar/navigationBar";
import { Row, Container, Col } from "react-bootstrap";

const SobreNosotros = () => {

    return (
        <>
            <Container className="letra">
                <Row>
                    <NavigationBar />
                </Row>

                <Row>
                    <Col className='caja'>
                        <div className='circulo'></div>
                    </Col>
                    <Col className='caja'>
                         <h1>ACA VA LA INFORMACION</h1>
                    </Col>
                    <Col className='caja'>
                         <h1>ACA VA LA INFORMACION</h1>
                    </Col>
                    <Col className='caja'>
                         <h1>ACA VA LA INFORMACION</h1>
                    </Col>
                </Row>


                <Row>
                    <Footer />
                </Row>
            </Container>
        </>
    );

}

export default SobreNosotros
