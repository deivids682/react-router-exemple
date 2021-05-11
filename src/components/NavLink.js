import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function NavLink(props) {
  return <StyledLink to={props.to}>{props.children}</StyledLink>;
}

export default NavLink;

const StyledLink = styled(Link)`
  padding: 5px 30px 5px 30px;
  color: #fff;
  display: block;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #659dbd;
    color: #fff;
  }
`;
