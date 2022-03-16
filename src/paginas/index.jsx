import React from 'react';
import Footer from '../componentes/Footer/Footer';
import MasVistas from '../componentes/MasVistas/MasVistas';
import Logo from '../componentes/Logo/Logo';
import MejorRankeadas from '../componentes/MejorRankeadas/MejorRankeadas';
import NavigationBar from '../componentes/navBar/navigationBar';
import CargarApi from '../componentes/ApiPeliculas/CargarApi';
import TestApiList from './testApi';

import { Link } from "react-router-dom";

function Home() {

  return (
    <>
     
        <NavigationBar/>
        <Logo/>
        {/* <MasVistas/>  */}
        {/* <MejorRankeadas/> */}
        <CargarApi/>
        <TestApiList/> 
        <Footer/>
    </>
  )
}

export default Home
