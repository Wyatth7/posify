import MediaQuery from "react-responsive";

import React from "react";
import styled from "styled-components";
import MobileCartButton from "../Cart/MobileCartContent/MobileCart/MobileCartButton";
import ItemSelect from "../ItemSelect/ItemSelect";
// import MobileCart from "../Cart/MobileCart";
import Cart from "../Cart/Cart";

const CONTENT = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;

  @media (min-width: 1280px) {
    display: flex;
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

// const PaddingDiv = styled.div`
//   padding: 0 2rem;
// `;

const Content = (props) => {
  return (
    <CONTENT>
      <ItemSelect />
      <MediaQuery maxWidth={1279}>
        <Wrapper>
          <MobileCartButton />
        </Wrapper>
      </MediaQuery>
      <MediaQuery minWidth={1280}>
        <Cart />
      </MediaQuery>
    </CONTENT>
  );
};

export default Content;
