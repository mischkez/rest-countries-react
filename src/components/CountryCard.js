import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
  return (
    <Link to={"countries/" + country.alpha2Code} className="card">
      <div className="" key={country.alpha2Code}>
        <img src={country.flag} alt={country.name + "'s flag"} />
        <div className="card-body">
          <h1>{country.name}</h1>
          <p>
            <strong>Population:</strong> {country.population}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
}
