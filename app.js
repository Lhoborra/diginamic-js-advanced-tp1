const axios = require('axios');
let Planet = require('./planet.js');

const fetchAllPlanets = async () => {
    let planets = axios.get('https://swapi.co/api/planets')
    .then(response => {
        let planetsTab = [];
        response.data.results.forEach(function(p){
            let planet = new Planet(p);
            console.log(
                `La planète ${ planet.name} - Population : ${ planet.population }`
            );
            planetsTab.push(planet);
        });
    console.log(
        ` Toutes les planètes représentent ${Planet.countPlanetsPopulation(planetsTab)} d'habitants. Sacré système !`
        );
    })
    .catch(error => {
        console.log(error)
    });
}

fetchAllPlanets();