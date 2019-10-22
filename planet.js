module.exports = class Planet {
    constructor({name,population}) {
        if(population == 'unknown'){
            population = 0;
        }
        population = (parseInt(population));
        this.name = name, 
        this.population = population;
    };

    
    static countPlanetsPopulation (planet){
        return planet.reduce(
            (population, planet) => population + planet.population, 0 
            );
        }
        
    }

