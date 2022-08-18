import React from "react";
import PaginationContainer from "./styles/styles";

const Pagination = ({ alertsPerPage, totalAlerts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAlerts / alertsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginationContainer aria-label="...">
      <ul className="pagination justify-content-center pagination-sm">
        {pageNumbers.map((num) => (
          <li className="page-item">
            <a
              className="page-link"
              tabIndex={"-" + num}
              onClick={() => paginate(num)}
              href="#"
            >
              {num}
            </a>
          </li>
        ))}
      </ul>
    </PaginationContainer>
  );
};

export default Pagination;
