import React, { useState } from "react";
import styled from "styled-components";
import Cart from "../Cart/Cart";
import MobileCartButton from "../Cart/MobileCart/MobileCart";
import ItemSelect from "../ItemSelect/ItemSelect";
import Modal from "../reusable/Button/Modal/Modal";

const CONTENT = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 1rem;
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
        <MobileCartButton clicked={onMobileClickHandler} />
      </Wrapper>
      {mobileCart ? (
        <Modal>
          <Cart closed={onMobileClickHandler} />
        </Modal>
      ) : null}
    </CONTENT>
  );
};

export default Content;
