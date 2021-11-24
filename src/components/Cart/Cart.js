import React, { useEffect } from "react";
import styled from "styled-components";
import CartHeader from "./CartHeader/CartHeader";
import CartItems from "./CartItems/CartItems";

const CART = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fdfdfb;
  padding: 1rem;
`;

const Cart = (props) => {
  useEffect(() => {
    document.querySelector("body").style.overflow = "hidden";

    return () => (document.querySelector("body").style.overflow = "visible");
  });

  return (
    <CART>
      <CartHeader />
      <CartItems />
    </CART>
  );
};

export default Cart;
