import React from "react";
import styled from "styled-components";

const BUTTON = styled.button`
  display: flex;
  background-color: #faecee;
  border: 1px solid #faecee;
  border-radius: 8px;
  padding: 0.5rem 1rem;
`;

const Icon = styled.div`
  margin-right: ${(props) => (props.isChildren === null ? `.2rem` : `0rem`)};
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  font-size: 1rem;
`;

const Button = (props) => {
  return (
    <BUTTON>
      <Icon isChildren={props.children}>{props.icon}</Icon>
      <Paragraph>{props.children}</Paragraph>
    </BUTTON>
  );
};

export default Button;
