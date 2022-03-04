import React from "react";
import styled from "styled-components";
import { useStore } from "../../../../../store/store";

const ITEM = styled.div`
  margin: 0.5rem 0;
  padding: 0.5rem;
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f5f5f5;
    box-shadow: 1px 1px 10px 5px #f5f5f5;
  }
`;

const HeadWrap = styled.div``;

const Header = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  margin: 0;
  padding: 0;
`;

const SubHead = styled.p`
  font-size: 1rem;
  color: #cfd2d8;
`;

const DataWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Image = styled.img`
  object-fit: cover;
  width: 90px;
  height: 90px;
  border-radius: 12px;
`;

const Price = styled.div`
  display: flex;
  align-items: flex-end;
`;

const PriceText = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: #ef7614;
`;

const Item = (props) => {
  const [state, dispatch] = useStore(false);

  const addToCartHandler = () => {
    const product = {
      id: props.id,
      title: props.title,
      basePrice: props.price,
      img: props.img,
      ingredients: [],
    };
    dispatch("OPEN_CUSTOMIZE_MODAL", product);
    console.log(state);
  };

  return (
    <ITEM onClick={addToCartHandler}>
      <HeadWrap>
        <Header>{props.title}</Header>
        <SubHead>{props.calories} calories</SubHead>
      </HeadWrap>
      <DataWrap>
        <Price>
          <PriceText>${props.price}</PriceText>
        </Price>
        <Image src={`${props.img}`} alt={props.title} />
      </DataWrap>
    </ITEM>
  );
};

export default Item;
