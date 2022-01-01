import React from "react";
import styled from "styled-components";

const BUTTON = styled.button`
  cursor: pointer;
  display: flex;
  background-color: #faecee;
  border: 1px solid #faecee;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  height: fit-content;
  width: inherit;
  justify-content: center;
`;

const Icon = styled.div`
  margin-right: ${(props) => (props.isChildren === null ? `.2rem` : `0rem`)};
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 0.2rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
`;

const Button = (props) => {
  return (
    <BUTTON onClick={props.clicked}>
      <Icon isChildren={props.children}>{props.icon}</Icon>
      <Paragraph>{props.children}</Paragraph>
    </BUTTON>
  );
};

export default Button;
