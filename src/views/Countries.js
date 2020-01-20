import axios from "axios";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import store from "store";
import CountryCard from "../components/CountryCard";
import Dropdown from "../components/DropDown";
import Search from "../components/Search";
import { BASE_URL } from "../config";

export default function Countries() {
  const cachedCountries = store.get("countries");

  const [countries, setCountries] = useState(cachedCountries);

  const getInitialData = useCallback(() => {
    if (cachedCountries) {
      setCountries(cachedCountries);
    } else {
      axios.get(`${BASE_URL}/all`).then(res => {
        store.set("countries", res.data);
        setCountries(res.data);
      });
    }
  }, [cachedCountries]);

  useEffect(() => getInitialData(), [getInitialData]);

  const filterData = region => {
    axios.get(`${BASE_URL}/region/${region}`).then(res => {
      setCountries(res.data);
    });
  };

  const search = query => {
    axios.get(`${BASE_URL}/name/${query}`).then(res => {
      setCountries(res.data);
    });
  };

  const onDropdownChange = region => {
    region ? filterData(region) : getInitialData();
  };

  let countryList = countries.map(country => (
    <CountryCard key={country.name} country={country} />
  ));

  return (
    <Fragment>
      <div className="row">
        <Search search={search} />
        <Dropdown onDropdownChange={onDropdownChange} />
      </div>
      <div className="countries">{countryList}</div>
    </Fragment>
  );
}
