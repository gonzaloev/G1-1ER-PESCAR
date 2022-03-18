import React from 'react';

import {

    Row,
    Col,
    Container,
    img
  } from "react-bootstrap";
import Logo1 from "./tecnologias/nodejslogo.png"

  function Carrousel() {
      
    return (   
   
   <Container>

<Row>

 {/* <Col>
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
<Col className="logo-carrousel slider" data-arrows="true">
  
  <div className='logo1'><img src={Logo1} alt="logo css" style={
    {
      maxWidth:'80px'
    }
  }/></div>

</Col>

</Row>
</Container>
)}

export default Carrousel