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
  margin-right: 0.2rem;
`;

const Paragraph = styled.p``;

const Button = (props) => {
  return (
    <BUTTON>
      <Icon>{props.icon}</Icon>
      <Paragraph>{props.children}</Paragraph>
    </BUTTON>
  );
};

export default Button;
