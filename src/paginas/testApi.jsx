import React, {useEffect, useState}from 'react'
import MasVistas from '../componentes/MasVistas/MasVistas';
import MejorRankeadas from '../componentes/MejorRankeadas/MejorRankeadas';

function TestApiList() {

    const [appState, setAppState] = useState({
        loading: false, // Le asignamos el estado falso como inicial
        repos: null,    // Lo iniciamos en null para compararlo mas adelante en un condicional
    });

    useEffect(() => {
        /* Cargamos los datos de la API. Le asignoamos la url de la API a la variable "apiURL" y a traves de los headers le pasamos los parametros que nos solicita para acceder, ya que la API es privada.*/
        setAppState({loading: true});
        const apiUrl = 'https://movies-app1.p.rapidapi.com/api/movies';
        fetch(apiUrl, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "movies-app1.p.rapidapi.com",
                "x-rapidapi-key": "d8e18551b2mshec99f566b716819p135e54jsn84665705b4b0" // aca pasamos la key, si no no funciona la api
            }
        })
            .then((res) => res.json()) // devolvemos el JSON
            .then((repos) =>{
                setAppState({loading: false, repos: repos}); //Usamos setAppState para cambiar el valor de repos que antes valia null
            });
    }, [setAppState]);

    return (
        <div>
            <MejorRankeadas repos={appState.repos}/> {/* Retornamos el componente mejor ranqueadas y le pasamos por parametro la api*/}
            <MasVistas repos={appState.repos}/>      {/* Retornamos el componente mas vistas y le pasamos por parametro la api*/}
        </div>
  );
}
export default TestApiList;