import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
// import Item from "./Items/Item/Item";
import Items from "./Items/Items";

const ITEMSELECT = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemSelect = (props) => {
  return (
    <ITEMSELECT>
      <Header />
      <Items />
    </ITEMSELECT>
  );
};

export default ItemSelect;
