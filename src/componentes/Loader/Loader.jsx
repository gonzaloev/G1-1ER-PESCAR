import "./loaderStyles.css"
import React from "react";
import NavigationBar from "../../componentes/navBar/navigationBar";
import Footer from "../../componentes/Footer/Footer";
import { Container, Row } from "react-bootstrap";

export const Loader = () => {
    return (
        <Container style={{marginTop:"150px"}}>
            <NavigationBar />
            <Row className="loader-container">
                <div class="loader"></div>
                <div class="loader2"></div>
            </Row>
            <Footer />
        </Container>
    )
}
