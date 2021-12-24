import React from "react";
import styled from "styled-components";

const CUSTOMIZE_ITEM_HEADER = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #f3f3f2;
  position: sticky;
`;

const Header = styled.h1`
  color: #ef7614;
  font-size: 1.8rem;
  font-weight: 400;
`;

const CustomizeItemHeader = (props) => {
  return (
    <CUSTOMIZE_ITEM_HEADER>
      <Header>{props.children}</Header>
    </CUSTOMIZE_ITEM_HEADER>
  );
};

export default CustomizeItemHeader;
