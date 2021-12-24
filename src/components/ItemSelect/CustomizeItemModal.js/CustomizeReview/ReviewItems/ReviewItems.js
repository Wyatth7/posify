import React from "react";
import styled from "styled-components";
import ReviewItem from "./ReviewItem/ReviewItem";

const REVIEW_ITEMS = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewItems = (props) => {
  return (
    <REVIEW_ITEMS>
      {props.ingredients
        ? props.ingredients.map((el) => (
            <ReviewItem title={el.title} price={el.price} />
          ))
        : null}
    </REVIEW_ITEMS>
  );
};

export default ReviewItems;
