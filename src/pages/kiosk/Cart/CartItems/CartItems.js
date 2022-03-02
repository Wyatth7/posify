import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem/CartItem";

const CARTITEMS = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const Blur = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.5rem;
  background-color: #ffffff;
  filter: blur(1rem);
`;

const CartItems = (props) => {
  const [overFlowing, setOverFlowing] = useState(false);
  const itemCount = props.itemCount;

  useEffect(() => {
    console.log(itemCount);
    if (itemCount >= 7) {
      setOverFlowing(true);
    } else {
      setOverFlowing(false);
    }
  }, [itemCount, setOverFlowing]);

  return (
    <CARTITEMS overFlowing={overFlowing}>
      {props.cartItems
        ? props.cartItems.map((el) => (
            <CartItem
              amountFunction={props.amountFunction}
              amount={el.amount}
              img={el.img}
              title={el.title}
              price={el.price}
              id={el.id}
              key={el.id}
            />
          ))
        : null}
      {overFlowing ? <Blur /> : null}
    </CARTITEMS>
  );
};

export default CartItems;
