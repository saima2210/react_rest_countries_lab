import React from 'react';

const CountriesList = ({ countries, onCountryVisited }) => (
  <>
    <h2>Where I want to visit 🛫 💫 </h2>
    <ul>
      {countries.map((country) => (
        <li key={country.name.common}>{country.name.common}
          <button onClick={() => onCountryVisited(country)}>Visited</button>
        </li>
      ))}
    </ul>
  </>
);

export default CountriesList;
