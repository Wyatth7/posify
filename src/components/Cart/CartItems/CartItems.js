import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem/CartItem";

const CARTITEMS = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const CartItems = (props) => {
  return (
    <CARTITEMS>
      <CartItem img="grilled-corn.png" title="Grilled Corn" price={8} />
      <CartItem img="grilled-corn.png" title="Grilled Corn" price={8} />
    </CARTITEMS>
  );
};

export default CartItems;
