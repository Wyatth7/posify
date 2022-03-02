import React, { useState } from "react";
import { FiTrash, FiPlus, FiMinus } from "react-icons/fi";
import styled from "styled-components";

const CARTITEM = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #000000;
`;

const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  object-fit: cover;
  width: 40%;
  height: auto;
  border-radius: 15px;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 500;
  width: 100%;
`;

const AmountControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ControlButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #faecee;
  background-color: ${(props) =>
    props.right
      ? `#faecee`
      : props.amount > 1 && props.del
      ? `#faecee`
      : `#ed5675`};
  color: ${(props) =>
    props.right
      ? `#000000 `
      : props.amount > 1 && props.del
      ? `#000000`
      : `#ffffff`};
  border-radius: 10px;
  font-size: 2rem;
  padding: 0.5rem;
`;

const DescriptionWrapper = styled.div`
  text-align: right;
`;

const ControlText = styled.p`
  margin: 0 1rem;
  font-size: 2rem;
`;

const Price = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: #ef7614;
`;

const CartItem = (props) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(props.price);

  const countHandler = (amount) => {
    setCount(count + amount);
    setPrice(price + props.price);
  };

  const priceHandler = (amount) => {
    setPrice(price + amount);
  };

  const increaseHandler = () => {
    countHandler(1);
    priceHandler(props.price);
  };

  const decreaseHandler = () => {
    if (count === 1) {
      console.log("deleting");
      return;
    }

    countHandler(-1);
    priceHandler(-props.price);
  };

  return (
    <CARTITEM>
      <CartHeader>
        <Image src={`/images/${props.img}`} alt={props.title} />
        <DescriptionWrapper>
          <Title>{props.title}</Title>
          <Price>${price}</Price>
        </DescriptionWrapper>
      </CartHeader>
      <AmountControl>
        <ControlButton amount={count} del onClick={decreaseHandler}>
          {count > 1 ? <FiMinus /> : <FiTrash />}
        </ControlButton>
        <ControlText>{count}</ControlText>
        <ControlButton amount={count} del right onClick={increaseHandler}>
          <FiPlus />
        </ControlButton>
      </AmountControl>
    </CARTITEM>
  );
};

export default CartItem;
