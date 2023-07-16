import React from 'react';
import './pagination.css'

function Pagination({maxPage,currPage,setCurrPage}) {
  return (
    <section className="page-section">
      <h3>Page :</h3>
      {Array.from([0,maxPage-1])?.map((curr) => (
        <button
          key={curr}
          className={`page-button ${
            currPage === curr + 1 ? "page-button-selected" : ""
          }`}
          onClick={() => setCurrPage(curr+1)}
        >
          {curr + 1}
        </button>
      ))}
    </section>
  )
}

export default Pagination