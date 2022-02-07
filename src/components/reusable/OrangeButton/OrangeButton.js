import React from "react";
import styled from "styled-components";

const ORANGE_BUTTON = styled.button`
  background-color: #ef7614;
  border: 1px solid #ef7614;
  border-radius: 10px;
  width: 100%;
  padding: 0.5rem 0;
  cursor: pointer;
`;

const Text = styled.p`
  color: #ffffff;
  font-size: 1rem;
`;

const OrangeButton = (props) => {
  return (
    <ORANGE_BUTTON onClick={props.clicked}>
      <Text>{props.children}</Text>
    </ORANGE_BUTTON>
  );
};

export default OrangeButton;
