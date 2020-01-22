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
            <ul>
              <li>
                <strong>Native name: </strong>
                {country.nativeName}
              </li>
              <li>
                <strong>Region: </strong>
                {country.region}
              </li>
              <li>
                <strong>Top level domain: </strong>
                {country.topLevelDomain}
              </li>
              <li>
                <strong>Languages: </strong>
                {languages.join(", ")}
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <strong>Population: </strong>
                {country.population}
              </li>
              <li>
                <strong>Sub region: </strong>
                {country.subregion}
              </li>
              <li>
                <strong>Currencies: </strong>
                {currencies.join(", ")}
              </li>
              {borders.length > 1 && (
                <li className="borders">
                  <strong>Borders:</strong>
                  {borders}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
