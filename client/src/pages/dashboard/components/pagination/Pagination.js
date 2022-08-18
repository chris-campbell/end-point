import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.nav`
  margin-top: 4rem;
  li a {
    font-size: 1.1rem;
  }
`;

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
