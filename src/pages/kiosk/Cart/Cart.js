import React, { useState } from "react";
import styled from "styled-components";
import priceFormatter from "../../../scripts/price-formatter";
import { useStore } from "../../../store/store";
import OrangeButton from "../../../components/reusable/OrangeButton/OrangeButton";
import CartHeader from "./CartHeader/CartHeader";
import CartItems from "./CartItems/CartItems";
import CartTotal from "./CartTotal/CartTotal";
import CreateOrder from "./CreateOrder/CreateOrder";

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
  overflow-y: auto;
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const ElementPadding = styled.div`
  padding: 1rem 0;
`;

const IsEmptyCart = styled.p`
  padding-top: 0.5rem;
  user-select: none;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 300;
  color: #ef7614;
`;

const Cart = (props) => {
  const [cartItems, dispatch] = useStore();
  const [showPayment, setShowPayment] = useState(false);

  const togglePaymentHandler = () => {
    setShowPayment(!showPayment);
  };

  const updateCartItemAmount = (obj) => {
    dispatch("EDIT_ITEM_AMOUNT", obj);
  };

  return (
    <CART>
      <Header>
        <CartHeader goBack={togglePaymentHandler} paymentScreen={showPayment} />
      </Header>
      {cartItems.cartProducts.length > 0 ? (
        <React.Fragment>
          {!showPayment ? (
            <React.Fragment>
              <Body>
                <CartItems
                  amountFunction={updateCartItemAmount}
                  cartItems={cartItems.cartProducts}
                  itemCount={cartItems.cartProducts.length}
                />
              </Body>
              <Footer>
                <CartTotal />
                <ElementPadding />
                <OrangeButton clicked={togglePaymentHandler}>
                  Pay {priceFormatter.format(cartItems.financials.totalPrice)}!
                </OrangeButton>
              </Footer>
            </React.Fragment>
          ) : (
            <CreateOrder />
          )}
        </React.Fragment>
      ) : (
        <IsEmptyCart>Items added to your cart will show up here.</IsEmptyCart>
      )}
    </CART>
  );
};

export default Cart;
