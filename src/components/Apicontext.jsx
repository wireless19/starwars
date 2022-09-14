import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

export function APIContextProvider({ children }) {

    const [filmData, getFilmData] = useState([]);
    const [starshipData, getstarshipData] = useState([]);
    const [peopleData, getPeopleData] = useState([]);
    const [speciesData, getSpeciesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        let films = "https://swapi.dev/api/films";
        let starships = "https://swapi.dev/api/starships";
        let people = "https://swapi.dev/api/people";
        let species = "https://swapi.dev/api/species";

        const requestOne = axios.get(films);
        const requestTwo = axios.get(starships);
        const requestThree = axios.get(people);
        const requestFour = axios.get(species);

        axios.all([requestOne, requestTwo, requestThree, requestFour])
            .then(
                axios.spread((...responses) => {
                    const responseOne = responses[0].data.results;
                    const responseTwo = responses[1].data.results;
                    const responesThree = responses[2].data.results;
                    const responesFour = responses[3].data.results;

                    getFilmData(responseOne);
                    getstarshipData(responseTwo);
                    getPeopleData(responesThree);
                    getSpeciesData(responesFour);
                })
            )
            .catch(error => { setError(error) })
            .finally(() => { setLoading(false) })
    }, []);

    return (
        <APIContext.Provider value={{ filmData, starshipData, peopleData, speciesData, loading, error }}>
            {children}
        </APIContext.Provider>
    );
}

export function useAPI() {
    const context = useContext(APIContext);
    if (context === undefined) {
        throw new Error("Context must be used within a Provider");
    }
    return context;
}