import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem/CartItem";

const CARTITEMS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const CartItems = (props) => {
  return (
    <CARTITEMS>
      <CartItem img="grilled-corn.png" title="Grilled Corn" price={1.75} />
    </CARTITEMS>
  );
};

export default CartItems;
