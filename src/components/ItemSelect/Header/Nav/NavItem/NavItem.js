import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NAVITEM = styled(NavLink)`
  display: flex;
  margin-right: 1rem;
  padding: 0.5rem 2rem;
  background-color: #ffffff;
  color: #000000;
  border-radius: 25px;
  margin: auto 1rem auto 0;
  text-decoration: none;
  height: inherit;

  &.active {
    background-color: #ef7614;
    border: 1px solid #ef7614;

    p {
      color: #ffffff;
    }
  }
`;

const Paragraph = styled.p`
  font-size: 0.8rem;
  color: #000000;
  height: 100%;
  margin: auto 0;
  text-align: center;
  white-space: nowrap;
`;

const NavItem = (props) => {
  return (
    <NAVITEM to={`/${props.path}`}>
      <Paragraph>{props.children}</Paragraph>
    </NAVITEM>
  );
};

export default NavItem;
