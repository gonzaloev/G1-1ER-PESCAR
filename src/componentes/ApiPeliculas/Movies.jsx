import React from 'react'

export default function Movies() {

    fetch("https://movies-app1.p.rapidapi.com/api/movies", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "movies-app1.p.rapidapi.com",
            "x-rapidapi-key": "d6a7128958msh6dc9a6abe0a6f58p1f8e67jsn85420cef0d4e"
        }
    })
        .then(response => {
            return response.json();
        })
        .then(response => {
            var tuhermana =  response;
        })
        .catch(err => {
            console.error(err);
        });

    return (
        <div>Movies</div>
    )
}
