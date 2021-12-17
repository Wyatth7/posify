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
      <CartItem img="grilled-corn.png" title="Grilled Corn" price={1.97} />
      <CartItem
        img="fettuccine-alfredo.jpeg"
        title="Fettuccine Pasta"
        price={10.75}
      />
      <CartItem img="ranch-burger.jpeg" title="Ranch Burger" price={8.75} />
      <CartItem
        img="stuffed-filet-steak.jpeg"
        title="Stuffed Filet Steak"
        price={15.75}
      />
    </CARTITEMS>
  );
};

export default CartItems;
