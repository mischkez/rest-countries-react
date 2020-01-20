import React, { useState } from "react";

export default function Dropdown({ onDropdownChange }) {
  const [value, setValue] = useState("");

  const handleOnChange = event => {
    setValue(event.target.value);
    onDropdownChange(event.target.value);
  };

  return (
    <select aria-label="Region Filter" value={value} onChange={handleOnChange}>
      <option value="" disabled>
        Filter By Region
      </option>
      <option value="">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
