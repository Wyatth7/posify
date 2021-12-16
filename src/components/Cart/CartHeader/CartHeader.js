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

  @media only screen and (min-width: 950px) {
    border: none;
    flex-direction: row;
    justify-content: space-between;
  }

  @media only screen and (min-width: 950px) {
    padding: 1.5rem 0;
  }
`;

const Header = styled.h1`
  font-weight: 500;
  font-size: 1.7rem;

  @media only screen and (min-width: 950px) {
    font-size: 1.4rem;
    margin: auto 0;
  }

  @media only screen and (min-width: 1150px) {
    font-size: 1.7rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  p {
    font-weight: 300;
  }

  @media only screen and (min-width: 950px) {
    width: fit-content;
    height: fit-content;
    justify-content: baseline;
  }
`;

const MidPad = styled.div`
  padding: 0 0.2rem;
`;

const CartHeader = (props) => {
  return (
    <CARTHEADER>
      <Header>Current Order</Header>
      <MediaQuery minWidth={950}>
        <ButtonContainer>
          <Button>Clear All</Button>
          <MidPad />
          <Button icon={<FiSettings />}></Button>
        </ButtonContainer>
      </MediaQuery>
    </CARTHEADER>
  );
};

export default CartHeader;
