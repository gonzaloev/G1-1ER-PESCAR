import React from 'react';
import Footer from '../componentes/Footer/Footer';
import Logo from '../componentes/Logo/Logo';
import NavigationBar from '../componentes/navBar/navigationBar';

{/* infinite Logo Carouselhttps://jsfiddle.net/solodev/f6obs8mx/ */}

function AboutUs() {

    return (

        
      <>
          <NavigationBar/>
          <Logo/>
          {/* <Movies/> */}
          <Footer/>
{/*ésta pág tiene
devs en imágenes con info y logo a redes,
carousel infinito: 
tecno usadas, patrocinadores*/}


{/* devs: imágenes y descrición personal de cada uno,
link a redes sociales con logo de cada red social*/}
{/*



*/}

{/*  ejemplo código logo y link a redes


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
<div>

<Col><img src="" alt="" />
<h3>Lucas G V</h3>
<p></p>
</Col>
<Col><img src="" alt="" />
<h3>Axel R</h3>
<p></p>
</Col>
<Col><img src="" alt="" />
<h3>Gonza V</h3>
</Col>
<Col><img src="" alt="" />
<h3>Luciana C P</h3>
</Col>


</div>



{/*frase */}

{/* <Row className="footerrow">
      
      <blockquote className="blockquote mb-0">
        <p>{' '}Si quieres quitar el hambre a un hombre dale un pez. Pero si quieres que no vuelva a tener hambre, enséñale a Pescar.{' '}</p>
        <p className="blockquote-footer">Fundación Pescar / <cite title="Source Title">Lao Tsé</cite></p>
      </blockquote>
</Row> */}

{/* carrousel infinito tec usadas */}
{/* carrousel infinito patrocinadores */}



      </>
    )
  }
  
  export default AboutUs
  