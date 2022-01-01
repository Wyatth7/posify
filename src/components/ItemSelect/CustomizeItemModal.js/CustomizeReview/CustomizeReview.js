import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStore } from "../../../../store/store";
import Button from "../../../reusable/Button/Button";
import CustomizeItemHeader from "../CustomizeItemHeader/CustomizeItemHeader";
import ReviewItems from "./ReviewItems/ReviewItems";

const CUSTOMIZE_REVIEW = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #f3f3f2;
  overflow: scroll;
`;

const ImageWrapper = styled.div`
  padding: 1rem 1rem 0 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
`;

const ItemWrapper = styled.div`
  overflow: scroll;
`;

const ButtonWrapper = styled.div`
  padding: 1rem;
  width: 100%;
`;

const CustomizeReview = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const [state, dispatch] = useStore();

  // finds ingredients based on id, then adds then displays them to review item.
  useEffect(() => {
    let newIngredientArray = state.curCustomizeObj.ingredients.map((el) => {
      if (state.ingredients.some((e) => e.id === el)) {
        return state.ingredients.find((e) => e.id === el);
      }

      return null;
    });

    setIngredients(newIngredientArray);
  }, [setIngredients, state]);

  const onAddToCartHandler = () => {
    dispatch("ADD_CART_ITEM", state.curCustomizeObj);
    dispatch("CLOSE_CUSTOMIZE_MODAL", false);
  };

  return (
    <CUSTOMIZE_REVIEW>
      <ImageWrapper>
        <Image src="/images/ranch-burger.jpeg" alt="testimg" />
      </ImageWrapper>
      <CustomizeItemHeader>Ingredients</CustomizeItemHeader>
      <ItemWrapper>
        <ReviewItems ingredients={ingredients} />
      </ItemWrapper>

      <ButtonWrapper>
        <Button clicked={onAddToCartHandler}>Add To Cart</Button>
      </ButtonWrapper>
    </CUSTOMIZE_REVIEW>
  );
};

export default CustomizeReview;
