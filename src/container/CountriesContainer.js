import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";
import VisitedCountriesList from "../components/VisitedCountriesList";


const CountriesContainer = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);


const loadJapanData = async () => {
    const japanResponse = await fetch ("https://restcountries.com/v3.1/name/japan");
    const japanData = await japanResponse.json();
    

    setCountries(japanData);

};

// const loadTanazaniaData = async () => {
//     const tanzaniaResponse = await fetch ("https://restcountries.com/v3.1/name/tanzania");
//     const tanzaniaData = await tanzaniaResponse.json();

//     setCountries(tanzaniaData);

// }; - tried to get these two to list out but then it would overwrite japan....



const loadVisitedCountriesData = async () => { // tried to add more countries but it would overwrite 
      const visitedResponse = await fetch("https://restcountries.com/v3.1/name/thailand");
      const visitedData = await visitedResponse.json();
      setVisitedCountries(visitedData);
  };



    useEffect( () => {
        loadJapanData();
        // loadTanazaniaData
        loadVisitedCountriesData();
    }, []);

    return (  
        <>
        <h1>My country bucket list 🌋</h1>
        <CountriesList countries={countries} />
        <VisitedCountriesList visitedCountries={visitedCountries} />
    </>
  );
};









//         <h1>My country bucket list 🌋</h1>
//         <ul>
//             <CountriesList countries={countries}/>


//             <CountriesList countries={visitedCountries}/>
//             </ul>
//         </>
//     );

// };
 
export default CountriesContainer;