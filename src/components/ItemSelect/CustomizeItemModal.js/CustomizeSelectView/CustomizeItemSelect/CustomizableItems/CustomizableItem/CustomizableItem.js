import React from "react";
import styled from "styled-components";

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
`;

const Price = styled.p`
  font-size: 0.8rem;
  color: #c1aeae;
`;

const CustomizableItem = (props) => {
  return (
    <CUSTOMIZABLE_ITEM index={props.index}>
      <Title>{props.title}</Title>
      <Price>+ ${props.price}</Price>
    </CUSTOMIZABLE_ITEM>
  );
};

export default CustomizableItem;
