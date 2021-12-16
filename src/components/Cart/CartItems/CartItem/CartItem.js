import React, { useState } from "react";
import styled from "styled-components";
import QuantityController from "../../QuantityController/QuantityController";

const CARTITEM = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
`;

const DescriptionContainer = styled.div`
  display: flex;
  width: fit-content;
`;

const Image = styled.img`
  object-fit: cover;
  width: 20%;
  max-width: fit-content;
  height: auto;
  border-radius: 12px;
`;

const Title = styled.p`
  font-size: 1rem;
  font-weight: 400;
  padding-left: 0.5rem;
  margin: auto 0;
`;

const QuantityContainer = styled.div`
  margin: auto 0;
`;

const PriceContainer = styled.div``;

const Price = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: #ef7614;
`;

const CartItem = (props) => {
  const [price, setPrice] = useState(props.price);

  const priceHandler = (amount) => {
    setPrice(price + amount);
  };

  return (
    <CARTITEM>
      <DescriptionContainer>
        <Image src={`/images/${props.img}`} alt={props.title} />
        <Title>{props.title}</Title>
      </DescriptionContainer>
      <QuantityContainer>
        <QuantityController priceFunc={priceHandler} price={props.price} />
      </QuantityContainer>
      <PriceContainer>
        <Price>{price}</Price>
      </PriceContainer>
    </CARTITEM>
  );
};

export default CartItem;
