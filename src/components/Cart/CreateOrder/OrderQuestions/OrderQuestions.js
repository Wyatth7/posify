import React, { useEffect } from "react";
import styled from "styled-components";

const ORDER_QUESTIONS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  padding-bottom: 1rem;
  text-align: center;
  z-index: 555;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  z-index: 555;
`;

const BooleanComponent = styled.div`
  padding-top: 1rem;
`;

const OrderQuestions = (props) => {
  return (
    <ORDER_QUESTIONS>
      <Paragraph>{props.text}</Paragraph>
      <CheckBoxContainer>{props.children}</CheckBoxContainer>
      {props.toShowComponent === props.currentlySelected ? (
        <BooleanComponent>{props.component}</BooleanComponent>
      ) : null}
    </ORDER_QUESTIONS>
  );
};

export default OrderQuestions;
