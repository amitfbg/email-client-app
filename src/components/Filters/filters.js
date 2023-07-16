import React from "react";
import "./filter.css";

function Filters({ filtersArray, currFilter, handleFilterChange }) {
  return (
    <section className="filter-section">
      <h3>Filter By:</h3>
      {filtersArray?.map((cur) => (
        <button
          key={cur.id}
          className={`filter-button ${
            currFilter === cur.name ? "filter-button-selected" : ""
          }`}
          onClick={() => handleFilterChange(cur.name)}
        >
          {cur.name}
        </button>
      ))}

      <button className="filter-button" onClick={() => handleFilterChange("")}>
        Clear
      </button>
    </section>
  );
}

export default Filters;
