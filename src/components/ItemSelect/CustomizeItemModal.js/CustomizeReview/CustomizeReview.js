import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

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
  height: 175px;
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

const CloseWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 1rem 0 0;
  padding-bottom: 0;
`;

const Icon = styled.div`
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  padding: 0;
  font-size: 1.2rem;
  color: #ef7614;
`;

const CustomizeReview = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const [state, dispatch] = useStore();

  // finds ingredients based on id, then adds then displays them to review item.
  useEffect(() => {
    let newIngredientArray = state.curCustomizeObj.ingredients.map((el) => {
      if (state.ingredients.some((e) => e._id === el)) {
        // console.log(el);
        return state.ingredients.find((e) => e._id === el);
      }

      return null;
    });

    // console.log(newIngredientArray);
    setIngredients(newIngredientArray);
  }, [setIngredients, state]);

  const onAddToCartHandler = () => {
    dispatch("ADD_CART_ITEM", state.curCustomizeObj);
    dispatch("CLOSE_CUSTOMIZE_MODAL", false);
  };

  const closeModal = () => {
    dispatch("CLOSE_CUSTOMIZE_MODAL", false);
  };

  return (
    <CUSTOMIZE_REVIEW>
      <CloseWrapper>
        <Icon onClick={closeModal}>
          <IoMdClose />
        </Icon>
      </CloseWrapper>
      <ImageWrapper>
        <Image
          src={`http://localhost:8080${state.curCustomizeObj.img}`}
          alt={props.img}
        />
      </ImageWrapper>
      <CustomizeItemHeader title="Ingredients" />
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
