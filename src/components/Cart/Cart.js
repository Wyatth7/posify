import React from "react";
import styled from "styled-components";
import CartHeader from "./CartHeader/CartHeader";

const CART = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 35%;
  height: 100vh;
  padding-left: 2rem;
  border-left: 0.1rem solid #f3f3f2;
`;

const Header = styled.div``;

const Body = styled.div``;

const Footer = styled.div``;

const Cart = (props) => {
  return (
    <CART>
      <Header>
        <CartHeader />
      </Header>
      <Body></Body>
      <Footer></Footer>
    </CART>
  );
};

export default Cart;
