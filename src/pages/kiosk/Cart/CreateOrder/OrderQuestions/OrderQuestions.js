import React from "react";
import styled from "styled-components";
import Input from "../../../../../components/reusable/Input/Input";

const ORDER_QUESTIONS = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  padding-bottom: 1rem;
  /* text-align: start; */
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

const UserInfoInputs = styled.div`
  padding-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const OrderQuestions = (props) => {
  return (
    <ORDER_QUESTIONS>
      <Paragraph>{props.text}</Paragraph>
      <CheckBoxContainer>{props.children}</CheckBoxContainer>
      {props.toShowComponent === "delivery" ||
      props.toShowComponent === "pickup" ? (
        <UserInfoInputs>
          <Input ref={props.nameRef} text="Name" type="text" />
          <Input ref={props.phoneNumberRef} text="Phone Number" type="text" />
        </UserInfoInputs>
      ) : null}
      {props.toShowComponent === props.currentlySelected ? (
        <BooleanComponent>{props.component}</BooleanComponent>
      ) : null}
    </ORDER_QUESTIONS>
  );
};

export default OrderQuestions;
