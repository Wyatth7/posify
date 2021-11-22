import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import Item from "./Items/Item/Item";

const ITEMSELECT = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemSelect = (props) => {
  return (
    <ITEMSELECT>
      <Header />
      <Item />
    </ITEMSELECT>
  );
};

export default ItemSelect;
