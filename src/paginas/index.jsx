import React from "react";
import Footer from "../componentes/Footer/Footer";
import Logo from "../componentes/Logo/Logo";
import NavigationBar from "../componentes/navBar/navigationBar";
import TestApiList from "./testApi";


function Home() {
  return (
    <>
      <NavigationBar /> {/* Componentes */}
      <Logo />
      <TestApiList />
      <Footer />
    </>
  );
}

export default Home;
