import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const List = (props) => {


  const { repos } = props;

  if (!repos || repos.length === 0) return <p>No hay peliculas, intente nuevamente</p>;





  return (
    <ul>
      {/* Asignamos todos datos que van a pasar. A traves de la variable "repo" podemos acceder con la respectiva instruccion.
      Por ejemplo, "repo.image" accede a la url de la imagen. 
                   "repo.title" accede al titulo*/}
      {repos.results.map((repo) => {
        return (
          <Container>
          <div key={repo.id} className='list' style={{marginTop: '100px'}}>
            <Row>
            <Col style={{maxWidth:'400px'}}>
            <img src={repo.image}/>
            </Col>
            <Col style={{marginTop:'15%'}}>
            <span className='repo-text' style={{fontSize:'40'}}>{repo.id} </span> 
            <span className='repo-text'>{repo.title} </span>
            <br></br>
            <span className='repo-description'>{repo.description}</span>
            <br></br>
            <span className='repo-description'>{repo.rating}</span>
            </Col>
            </Row>
          </div>
          </Container>
        );
      })}
    </ul>
  );
};
export default List;