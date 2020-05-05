import React from "react";

const PaginationBar = ({ page, maxPage, changePage }) => {
  return (
    <nav>
      <button
        onClick={() => changePage(-1)}
        disabled={page === 1}
        className="submitButton pageButton"
      >
        Previous page
      </button>
      <button
        onClick={() => changePage(1)}
        disabled={page === maxPage}
        className="submitButton pageButton"
      >
        Next page
      </button>
    </nav>
  );
};

export default PaginationBar;
