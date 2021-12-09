import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SOLID_BUTTON = styled(NavLink)`
  background-color: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  border-radius: 10px;
  text-align: center;
  width: 100%;
  padding: 1rem 0.5rem;
  text-decoration: none;
`;

const Text = styled.p`
  color: #ffffff;
  font-size: 1rem;
`;

const SolidButton = (props) => {
  return (
    <SOLID_BUTTON to={`/${props.path}`} color={props.color}>
      <Text>{props.children}</Text>
    </SOLID_BUTTON>
  );
};

export default SolidButton;
