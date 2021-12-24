import React from "react";
import styled from "styled-components";

const REVIEW_ITEM = styled.div`
  user-select: none;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 0.3rem;
`;

const Title = styled.p``;

const Price = styled.p``;

const ReviewItem = (props) => {
  return (
    <REVIEW_ITEM>
      <Title>{props.title}</Title>
      <Price>+ ${props.price}</Price>
    </REVIEW_ITEM>
  );
};

export default ReviewItem;
