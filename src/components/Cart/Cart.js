import React, { useEffect } from "react";
import styled from "styled-components";
import CartHeader from "./CartHeader/CartHeader";
import CartItems from "./CartItems/CartItems";
import MobileCartButton from "./MobileCart/MobileCart";

const CART = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fdfdfb;
  overflow: auto;
  padding: 1rem;
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Cart = (props) => {
  // useEffect(() => {
  //   document.querySelector("body").style.overflow = "hidden";

  //   return () => (document.querySelector("body").style.overflow = "visible");
  // });

  return (
    <CART>
      <CartHeader />
      <CartItems />
      <Wrapper>
        <MobileCartButton />
      </Wrapper>
    </CART>
  );
};

export default Cart;
