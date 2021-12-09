import React, { useEffect } from "react";
import styled from "styled-components";
import SolidButton from "../reusable/SolidButton/SolidButton";
import CartHeader from "./CartHeader/CartHeader";
import CartItems from "./CartItems/CartItems";

const CART = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 100vh;
  background-color: #fdfdfb;
  overflow: auto;
  padding: 1rem;
`;

const PaddingTopWrapper = styled.div`
  padding-top: 1rem;
`;

const PaddingBottomWrapper = styled.div``;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const MarginWrapper = styled.div`
  margin: 0 0.2rem;
`;

const Cart = (props) => {
  useEffect(() => {
    document.querySelector("body").style.overflow = "hidden";

    return () => (document.querySelector("body").style.overflow = "visible");
  });

  return (
    <CART>
      <PaddingBottomWrapper>
        <CartHeader />
      </PaddingBottomWrapper>
      <CartItems />
      <PaddingTopWrapper>
        <ButtonWrapper>
          <SolidButton path="" clicked={props.closed} color="#ed5675">
            Close
          </SolidButton>
          <MarginWrapper />
          <SolidButton path="" color="#ef7614">
            Checkout
          </SolidButton>
        </ButtonWrapper>
      </PaddingTopWrapper>
    </CART>
  );
};

export default Cart;
