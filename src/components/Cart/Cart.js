import React from "react";
import styled from "styled-components";
import CartHeader from "./CartHeader/CartHeader";
import CartItems from "./CartItems/CartItems";

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

const Footer = styled.div``;

const Cart = (props) => {
  return (
    <CART>
      <Header>
        <CartHeader />
      </Header>
      <Body>
        <CartItems />
      </Body>
      <Footer></Footer>
    </CART>
  );
};

export default Cart;
