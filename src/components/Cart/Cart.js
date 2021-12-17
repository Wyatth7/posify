import React from "react";
import styled from "styled-components";
import SolidButton from "../reusable/SolidButton/SolidButton";
import CartHeader from "./CartHeader/CartHeader";
import CartItems from "./CartItems/CartItems";
import CartTotal from "./CartTotal/CartTotal";

const CART = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 35%;
  height: 100vh;
  padding-left: 1rem;
  border-left: 0.1rem solid #f3f3f2;

  @media only screen and (min-width: 1280px) {
    width: 30%;
  }
`;

const Header = styled.div``;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ElementPadding = styled.div`
  padding: 1rem 0;
`;

const Cart = (props) => {
  return (
    <CART>
      <Header>
        <CartHeader />
      </Header>
      <Body>
        <CartItems />
      </Body>
      <Footer>
        <CartTotal />
        <ElementPadding />
        <SolidButton path="" color="#ef7614">
          Pay $33.76
        </SolidButton>
      </Footer>
    </CART>
  );
};

export default Cart;
