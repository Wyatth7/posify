import React from "react";
import styled from "styled-components";
import { useStore } from "../../../../../../../store/store";

const CUSTOMIZABLE_ITEM = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;
  border-top: ${(props) => (props.index === 0 ? "1px solid #f5f5f5" : "none")};
  border-bottom: 1px solid #f5f5f5;

  &:hover {
    background-color: #f5f5f5;
    /* background-color: #ef7614; */

    p {
      /* color: #ffffff; */
    }
    /* background-color: #84dfff; */
  }
`;

const Title = styled.p`
  font-size: 1rem;
  text-transform: capitalize;
`;

const Price = styled.p`
  font-size: 0.8rem;
  text-transform: capitalize;
  color: #c1aeae;
`;

const CustomizableItem = (props) => {
  const dispatch = useStore(false)[1];

  const addIngredientHandler = () => {
    dispatch("ADD_ITEM_INGREDIENTS", props.id);
  };

  return (
    <CUSTOMIZABLE_ITEM onClick={addIngredientHandler} index={props.index}>
      <Title>{props.title}</Title>
      <Price>+ ${props.price}</Price>
    </CUSTOMIZABLE_ITEM>
  );
};

export default CustomizableItem;
