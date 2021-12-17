import React, { useState } from "react";
import styled from "styled-components";
import QuantityController from "../../QuantityController/QuantityController";

const CARTITEM = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4%;
  justify-content: space-between;
  width: 100%;
  height: fit-content;
  padding-bottom: 0.5rem;

  @media only screen and (min-width: 1130px) {
    grid-gap: 5%;
  }

  @media only screen and (min-width: 1189px) {
    grid-gap: 8%;
  }
`;

const DescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40px;
  /* width: fit-content; */

  @media only screen and (min-width: 1130px) {
    width: 150px;
  }
`;

const ImageWrapper = styled.div``;

const Image = styled.img`
  object-fit: cover;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  margin: auto 0;

  @media only screen and (min-width: 1130px) {
    width: 50px;
    height: 50px;
    border-radius: 12px;
  }
`;

const Title = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  padding-left: 0.5rem;
  margin: auto 0;
  width: fit-content;
  overflow-wrap: break-word;

  @media only screen and (min-width: 1130px) {
    font-size: 1rem;
  }
`;

const QuantityContainer = styled.div`
  margin: auto 0;
`;

const PriceContainer = styled.div`
  margin: auto 0;
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #000000;
  margin: auto 0;
  text-align: right;
`;

const CartItem = (props) => {
  const [price, setPrice] = useState(props.price);

  const priceHandler = (amount) => {
    setPrice(price + amount);
  };

  return (
    <CARTITEM>
      <DescriptionContainer>
        <ImageWrapper>
          <Image src={`/images/${props.img}`} alt={props.title} />
        </ImageWrapper>
        <Title>{props.title}</Title>
      </DescriptionContainer>
      <QuantityContainer>
        <QuantityController priceFunc={priceHandler} price={props.price} />
      </QuantityContainer>
      <PriceContainer>
        <Price>${price}</Price>
      </PriceContainer>
    </CARTITEM>
  );
};

export default CartItem;
