import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
// import Item from "./Items/Item/Item";
import Items from "./Items/Items";

const ITEMSELECT = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 1rem;

  @media only screen and (min-width: 950px) {
    width: 65%;
    padding-right: 1rem;
    padding-top: 0;
    /* border-right: 0.1rem solid #f3f3f2; */
  }

  @media only screen and (min-width: 1280px) {
    width: 70%;
  }
`;

// const NavContainer = styled.div`
//   width: 100%;
// `;

const ItemSelect = (props) => {
  return (
    <ITEMSELECT>
      <Header />
      <Items />
    </ITEMSELECT>
  );
};

export default ItemSelect;
