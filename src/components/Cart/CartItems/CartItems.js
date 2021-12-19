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
  console.log(props.cartItems);
  return (
    <CARTITEMS>
      {props.cartItems
        ? props.cartItems.map((el) => (
            <CartItem img={el.img} title={el.title} price={el.price} />
          ))
        : null}
    </CARTITEMS>
  );
};

export default CartItems;
