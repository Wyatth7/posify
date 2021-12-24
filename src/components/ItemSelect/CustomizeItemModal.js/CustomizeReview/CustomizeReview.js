import React from "react";
import styled from "styled-components";
import CustomizeItemHeader from "../CustomizeItemHeader/CustomizeItemHeader";
import ReviewItems from "./ReviewItems/ReviewItems";

const ingredients = [
  {
    id: 0,
    title: "Pickles",
    price: 0.45,
    category: "vegetable",
  },
  {
    id: 1,
    title: "Tomatoes",
    price: 0.35,
    category: "vegetable",
  },
  {
    id: 3,
    title: "Steak",
    price: 2,
    category: "meat",
  },
];

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
  padding: 1rem;
`;

const CustomizeReview = (props) => {
  return (
    <CUSTOMIZE_REVIEW>
      <ImageWrapper>
        <Image src="/images/ranch-burger.jpeg" alt="testimg" />
      </ImageWrapper>
      <CustomizeItemHeader>Ingredients</CustomizeItemHeader>
      <ItemWrapper>
        <ReviewItems ingredients={ingredients} />
      </ItemWrapper>
    </CUSTOMIZE_REVIEW>
  );
};

export default CustomizeReview;
