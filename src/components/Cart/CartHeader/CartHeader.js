import React from "react";
import { FiSettings } from "react-icons/fi";
import styled from "styled-components";
import Button from "../../reusable/Button/Button";

const CARTHEADER = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Header = styled.h1`
  font-weight: 500;
  font-size: 2.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  p {
    font-weight: 300;
  }
`;

const CartHeader = (props) => {
  return (
    <CARTHEADER>
      <Header>Current Order</Header>
      {/* <ButtonContainer>
        <Button>Clear All</Button>
        <Button icon={<FiSettings />}></Button>
      </ButtonContainer> */}
    </CARTHEADER>
  );
};

export default CartHeader;
