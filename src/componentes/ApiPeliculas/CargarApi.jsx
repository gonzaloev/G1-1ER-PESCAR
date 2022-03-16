import React from 'react';

class CargarApi extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://movies-app1.p.rapidapi.com/api/movies';
    fetch(apiUrl, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "movies-app1.p.rapidapi.com",
            "x-rapidapi-key": "32d6f1946emshd01b80456f42b38p1566bdjsn6a1d1e0303cc"
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