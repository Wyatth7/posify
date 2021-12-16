import React from "react";
import { FiSettings } from "react-icons/fi";
import styled from "styled-components";
import Button from "../../reusable/Button/Button";
import MediaQuery from "react-responsive";

const CARTHEADER = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 0;
  border-bottom: 1px solid #000000;

  @media (min-width: 1280px) {
    border: none;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const Header = styled.h1`
  font-weight: 500;
  font-size: 1.7rem;

  @media (min-width: 1280px) {
    font-size: 1.4rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  p {
    font-weight: 300;
  }

  @media (min-width: 1280px) {
    height: fit-content;
    justify-content: baseline;
  }
`;

const CartHeader = (props) => {
  return (
    <CARTHEADER>
      <Header>Current Order</Header>
      <MediaQuery minWidth={1280}>
        <ButtonContainer>
          <Button>Clear All</Button>
          <Button icon={<FiSettings />}></Button>
        </ButtonContainer>
      </MediaQuery>
    </CARTHEADER>
  );
};

export default CartHeader;
