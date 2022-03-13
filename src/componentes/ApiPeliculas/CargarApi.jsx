import React from 'react';

class CargarApi extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://movies-app1.p.rapidapi.com/api/movies';
    fetch(apiUrl, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "movies-app1.p.rapidapi.com",
            "x-rapidapi-key": "d6a7128958msh6dc9a6abe0a6f58p1f8e67jsn85420cef0d4e"
        }
    })
      .then((response) => response.json())
      .then((data) => console.log('Testeando ingreso de datos', data));
  }
  render() {
    return <> </>;
  }
}
export default CargarApi;