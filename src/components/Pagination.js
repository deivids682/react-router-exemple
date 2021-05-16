import _ from "lodash";
import { useState } from "react";
import styled, { css } from "styled-components";

function Pagination(props) {
  const [activePage, setActivePage] = useState(1);

  const pages = _.range(1, props.pages + 1);

  return (
    <StyledPagination>
      {pages.map((page, index) => (
        <StyledBottom
          isActive={activePage === page}
          key={index}
          onClick={() => props.changePage(page, () => setActivePage(page))}
        >
          {page}
        </StyledBottom>
      ))}
    </StyledPagination>
  );
}

export default Pagination;

const StyledBottom = styled.a`
  ${(props) =>
    props.isActive &&
    css`
      background-color: #daad86;
      color: #fff;
    `}
`;

const StyledPagination = styled.div`
  margin: 0 10rem 6rem 10rem;

  a {
    color: black;
    padding: 8px 16px;
    text-decoration: none;
    font-weight: 700;
  }
`;
