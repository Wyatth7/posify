import React from "react";
import styled from "styled-components";
import { FiDelete } from "react-icons/fi";
import { useStore } from "../../../../../../../store/store";
import priceFormatter from "../../../../../../../scripts/price-formatter";

const Icon = styled.div`
  margin: auto 0 auto 0.2rem;
  display: none;
  font-size: 1rem;
`;
const REVIEW_ITEM = styled.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 1rem;

  transition: all 0.2s;

  &:hover {
    background-color: #ed5675;
    color: #ffffff;
  }

  &:hover ${Icon} {
    display: flex;
  }
`;

const Title = styled.p`
  text-transform: capitalize;
`;

const Price = styled.p``;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReviewItem = (props) => {
  const dispatch = useStore()[1];

  const removeIngredientHandler = () => {
    dispatch("REMOVE_ITEM_INGREDIENTS", props.id);
  };

  return (
    <REVIEW_ITEM onClick={removeIngredientHandler}>
      <Title>{props.title}</Title>
      <PriceContainer>
        <Price>+ {priceFormatter.format(props.price)}</Price>
      </PriceContainer>
      <Icon>
        <FiDelete />
      </Icon>
    </REVIEW_ITEM>
  );
};

export default ReviewItem;
