import React from 'react';
import Footer from '../componentes/Footer/Footer';
import MasVistas from '../componentes/MasVistas/MasVistas';
import Logo from '../componentes/Logo/Logo';
import MejorRankeadas from '../componentes/MejorRankeadas/MejorRankeadas';
import NavigationBar from '../componentes/navBar/navigationBar';



function Home() {
  return (
    <>
        <NavigationBar/>
        <Logo/>
        <MasVistas/>
        <MejorRankeadas/>
        <Footer/>
    </>
  )
}

export default Home
