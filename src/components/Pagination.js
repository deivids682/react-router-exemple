import _ from "lodash";
import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import { changePageNumber } from "../actions";

function Pagination(props) {
  const pages = _.range(1, props.pages + 1);

  const actionChangePage = (page) => {
    props.changePageNumber(page);
  };

  return (
    <StyledPagination>
      {pages.map((page, index) => (
        <StyledBottom
          isActive={props.pageNumber === page}
          key={index}
          onClick={() => actionChangePage(page)}
        >
          {page}
        </StyledBottom>
      ))}
    </StyledPagination>
  );
}

const mapStateToProps = (state) => {
  return {
    pageNumber: state.meals.pageNumber,
  };
};

export default connect(mapStateToProps, { changePageNumber })(Pagination);

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
