import React, {useEffect, useState}from 'react'
import List from '../componentes/ApiPeliculas/List'
import MasVistas from '../componentes/MasVistas/MasVistas';
import CargandoLista from '../componentes/ApiPeliculas/CargandoLista'

function TestApiList() {
    /* Pasamos por parametro el componente que queremos pasarle la data */
    const ListLoading = CargandoLista(MasVistas);
    //const ListLoading = (List);
    const [appState, setAppState] = useState({
        loading: false,
        repos: null,
    });

    useEffect(() => {
        /* Cargamos los datos de la API. Le asignoamos la url de la API a la variable "apiURL" y a traves de los headers le pasamos los parametros que nos solicita para acceder, ya que la API es privada.*/
        setAppState({loading: true});
        const apiUrl = 'https://movies-app1.p.rapidapi.com/api/movies';
        fetch(apiUrl, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "movies-app1.p.rapidapi.com",
                "x-rapidapi-key": "32d6f1946emshd01b80456f42b38p1566bdjsn6a1d1e0303cc"
            }
        })
            .then((res) => res.json())
        
            .then((repos) =>{
                setAppState({loading: false, repos: repos});
            });
    }, [setAppState]);

    return (
        <div>
            
                <ListLoading isLoading={appState.loading} repos={appState.repos}/>

        </div>
  );
}

export default TestApiList;