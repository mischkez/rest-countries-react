import axios from "axios";
import { createBrowserHistory } from "history";
import React, { useEffect, useState } from "react";
import MdArrowRoundBack from "react-ionicons/lib/MdArrowRoundBack";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../config";

const history = createBrowserHistory();

export default function Country() {
  const [country, setCountry] = useState([]);
  const { code } = useParams();

  useEffect(() => {
    axios.get(`${BASE_URL}/alpha/${code}`).then(res => {
      setCountry(res.data);
    });
  }, [code]);

  let languages = [];
  let currencies = [];
  let borders = [];

  if (country.languages !== undefined) {
    languages = country.languages.map(lang => lang.name);
    currencies = country.currencies.map(cur => cur.name);
    borders = country.borders.map(border => (
      <Link key={border} className="border-link" to={"/countries/" + border}>
        {border}
      </Link>
    ));
  }

  return (
    <div>
      <button onClick={() => history.goBack()} className="back-button">
        <MdArrowRoundBack />
        <span>Back</span>
      </button>
      <div className="country m-5">
        <img src={country.flag} alt={country.name + "'s flag"} />
        <div className="details">
          <div>
            <h1>{country.name}</h1>
            <p>
              <strong>Native name: </strong>
              {country.nativeName}
            </p>
            <p>
              <strong>Region: </strong>
              {country.region}
            </p>
            <p>
              <strong>Top level domain: </strong>
              {country.topLevelDomain}
            </p>
            <p>
              <strong>Languages: </strong>
              {languages.join(", ")}
            </p>
          </div>
          <div>
            <p>
              <strong>Population: </strong>
              {country.population}
            </p>
            <p>
              <strong>Sub region: </strong>
              {country.subregion}
            </p>
            <p>
              <strong>Currencies: </strong>
              {currencies.join(", ")}
            </p>
            {borders.length > 1 && (
              <p className="borders">
                <strong>Borders:</strong>
                {borders}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
