import React from "react";
import { FiChevronLeft, FiSettings } from "react-icons/fi";
import styled from "styled-components";
import Button from "../../../../components/reusable/Button/Button";
import MediaQuery from "react-responsive";
import { useStore } from "../../../../store/store";
import signUserOut from "../../../../firebase/sign-user-out.js/sign-user-out";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

const BackButton = styled.div`
  cursor: pointer;
  color: #ef7614;
  display: flex;
  font-size: 1.4rem;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  border-bottom: 1px solid transparent;
  transition: all 0.2s;

  &:hover {
    border-bottom: 1px solid #ef7614;
  }
`;

const BackButtonIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackButtonText = styled.p``;

const CartHeader = (props) => {
  const history = useNavigate();
  const dispatch = useStore(false)[1];

  const clearCartHandler = () => {
    dispatch("CLEAR_CART");
  };

  const signOut = async () => {
    try {
      localStorage.setItem("authToken", "");
      dispatch("UPDATE_AUTH_STATUS", false);
      history("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CARTHEADER>
      <Header>Current Order</Header>
      <MediaQuery minWidth={950}>
        <ButtonContainer>
          {props.paymentScreen ? (
            <BackButton onClick={props.goBack}>
              <BackButtonIcon>
                <FiChevronLeft />
              </BackButtonIcon>
              <BackButtonText>Back</BackButtonText>
            </BackButton>
          ) : (
            <Button clicked={clearCartHandler}>Clear All</Button>
          )}
          <MidPad />
          <Button clicked={signOut}>Sign Out</Button>
        </ButtonContainer>
      </MediaQuery>
    </CARTHEADER>
  );
};

export default CartHeader;
