import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";


const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);


const loadData = async () => {
    const response = await fetch ("https://restcountries.com/v3.1/all");
    const data = await response.json();
    

    setCountries(data);

};


const handleCountryVisited = (country) => {
    setCountries((visitedCountries) => visitedCountries.filter((currentCountry) => currentCountry !== country));
    setVisitedCountries((hasVisitedCountry) => [...hasVisitedCountry, country]);
};


    useEffect( () => {
        loadData();

    }, []);

    return (  
        <>
        <h1>My country bucket list 🌋</h1>
        <CountriesList countries={countries} onCountryVisited={handleCountryVisited}/>
        <VisitedCountriesList visitedCountries={visitedCountries} />
    </>
  );
};

 
export default CountriesContainer;