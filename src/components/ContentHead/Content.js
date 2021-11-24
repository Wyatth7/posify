import React, { useState } from "react";
import styled from "styled-components";
import Cart from "../Cart/Cart";
import MobileCart from "../Cart/MobileCart/MobileCart";
import ItemSelect from "../ItemSelect/ItemSelect";

const CONTENT = styled.div`
  position: relative;
  width: 100%;
  max-height: 100vh;
`;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = (props) => {
  const [mobileCart, setMobileCart] = useState(false);

  const onMobileClickHandler = () => {
    setMobileCart(!mobileCart);
  };

  return (
    <CONTENT>
      <ItemSelect />
      <Wrapper>
        <MobileCart clicked={onMobileClickHandler} />
      </Wrapper>
      {mobileCart ? <Cart closed={onMobileClickHandler} /> : null}
    </CONTENT>
  );
};

export default Content;
