import React, {useState, useEffect} from 'react'
import { Row, Container, Col, Button, Card } from "react-bootstrap";
import NavigationBar from "../../componentes/navBar/navigationBar";
import Footer from "../../componentes/Footer/Footer";
import "./PeliculasStyle.css";
import { useParams } from "react-router-dom"

export const BuscarPelicula = () => {

    let {nombrePelicula} = useParams();
    
  return (
    <Container>
    <NavigationBar/>
    <Footer/>
    </Container>
  )
}
