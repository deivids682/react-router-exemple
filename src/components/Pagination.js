import _ from "lodash";
import styled, { css } from "styled-components";

function Pagination(props) {
  const pages = _.range(1, props.pages);
  console.log(pages);
  return (
    <StyledPagination>
      <StyledBottom>&laquo;</StyledBottom>
      <StyledBottom>1</StyledBottom>
      <StyledBottom isActive>2</StyledBottom>
      <StyledBottom>&raquo;</StyledBottom>
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
