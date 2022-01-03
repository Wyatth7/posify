import React from "react";
import styled from "styled-components";
import priceFormatter from "../../../../scripts/price-formatter";

const NAMEPRICE = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Paragraph = styled.p`
  padding-bottom: 1rem;
  color: #000000;
  font-weight: ${(props) => (props.price ? "500" : "400")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
`;

const NamePrice = (props) => {
  return (
    <NAMEPRICE>
      <Paragraph fontSize={props.fontSize}>{props.text}</Paragraph>
      <Paragraph price fontSize={props.fontSize}>
        {props.discount ? "- " : ""}
        {priceFormatter.format(props.price)}
      </Paragraph>
    </NAMEPRICE>
  );
};

export default NamePrice;
