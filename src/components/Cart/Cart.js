import React from "react";
import styled from "styled-components";
import CompanyInfo from "../ItemSelect/Header/CompanyInfo/CompanyInfo";
import SolidButton from "../reusable/SolidButton/SolidButton";
import CartHeader from "./CartHeader/CartHeader";
import CartItems from "./CartItems/CartItems";

const CART = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  max-height: -webkit-fill-available;
  background-color: #fdfdfb;
  overflow: auto;
  padding: 0 1rem;
`;

const PaddingTopWrapper = styled.div`
  padding-top: 1rem;
`;

const PaddingBottomWrapper = styled.div``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 1rem;
`;

const MarginWrapper = styled.div`
  margin: 0 0.2rem;
`;

const HeaderWrapper = styled.div`
  padding-top: 1rem;
`;

const Cart = (props) => {
  return (
    <CART height={window.innerHeight}>
      <HeaderWrapper>
        <CompanyInfo />
      </HeaderWrapper>
      <PaddingBottomWrapper>
        <CartHeader />
      </PaddingBottomWrapper>
      <CartItems />
      <PaddingTopWrapper>
        <ButtonWrapper id="buttonWrapper">
          <SolidButton path="" color="#ef7614">
            Checkout
          </SolidButton>
          <MarginWrapper />
          <SolidButton path="" clicked={props.closed} color="#ed5675">
            Close
          </SolidButton>
        </ButtonWrapper>
      </PaddingTopWrapper>
    </CART>
  );
};

export default Cart;
