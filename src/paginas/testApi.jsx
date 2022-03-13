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
                "x-rapidapi-key": "d6a7128958msh6dc9a6abe0a6f58p1f8e67jsn85420cef0d4e"
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