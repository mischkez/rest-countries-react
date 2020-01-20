import React from "react";
import MdSearch from "react-ionicons/lib/MdSearch";

export default function Search({ search }) {
  return (
    <div className="search-container">
      <MdSearch className="search-icon"></MdSearch>
      <input
        aria-label="Search"
        type="text"
        placeholder="Search..."
        onChange={event => search(event.target.value)}
      />
    </div>
  );
}
