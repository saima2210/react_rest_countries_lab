import React from 'react';

const VisitedCountriesList = ({ visitedCountries }) => (
  <>
    <h2>Where I have visited 🌍 🛩 </h2>
    <ul>
      {visitedCountries.map((country) => (
        <li key={country.name.common}>{country.name.common}</li>
      ))}
    </ul>
  </>
);

export default VisitedCountriesList;
