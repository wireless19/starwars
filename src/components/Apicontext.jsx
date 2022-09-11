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
        axios.get("https://swapi.dev/api/films")
            .then(filmResponse => { getFilmData(filmResponse.data.results) })
            .catch(error => { setError(error) })
            .finally(() => { setLoading(false) })
    }, []);

    useEffect(() => {
        axios.get("https://swapi.dev/api/starships")
            .then(starshipResponse => { getstarshipData(starshipResponse.data.results) })
            .catch(error => { setError(error) })
            .finally(() => { setLoading(false) })
    }, []);

    useEffect(() => {
        axios.get("https://swapi.dev/api/people")
            .then(peopleResponse => { getPeopleData(peopleResponse.data.results) })
            .catch(error => { setError(error) })
            .finally(() => { setLoading(false) })
    }, []);

    useEffect(() => {
        axios.get("https://swapi.dev/api/species")
            .then(speciesResponse => { getSpeciesData(speciesResponse.data.results) })
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