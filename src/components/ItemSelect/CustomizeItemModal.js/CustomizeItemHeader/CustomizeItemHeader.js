import React from "react";
import styled from "styled-components";

const CUSTOMIZE_ITEM_HEADER = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #f3f3f2;
`;

const Header = styled.h1`
  color: #ef7614;
  font-size: 1.65rem;
  font-weight: 400;
`;

const Price = styled(Header)`
  font-weight: 300;
`;

const CustomizeItemHeader = (props) => {
  return (
    <CUSTOMIZE_ITEM_HEADER>
      <Header>{props.title}</Header>
      <Price>{props.price}</Price>
    </CUSTOMIZE_ITEM_HEADER>
  );
};

export default CustomizeItemHeader;
