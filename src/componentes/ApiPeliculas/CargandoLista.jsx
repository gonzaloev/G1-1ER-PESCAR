import React from 'react'

function CargandoLista(Component) {

  /* Hacemos la carga */
  /* Añadir imagen de carga */
  return function ListaCargada({ isLoading, ...props}){
      if(!isLoading) return <Component {...props}/>;
      
      return (
        <div style={{backgroundImage:''}}>
            <p style={{textAlign: 'center', fontSize: '30px'}}>
                Cargando todos los datos, espere por favor...
            </p>      
          </div>
          )
        }
    }

export default CargandoLista