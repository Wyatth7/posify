import React from "react";
import styled from "styled-components";
import { useStore } from "./../../../store/store";
import NamePrice from "./NamePrice/NamePrice";

const CARTTOTAL = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 100%;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 1px 1px 10px 9px #f5f5f5;
`;

const Prices = styled(CARTTOTAL)`
  padding: 0.4rem 0 0 0;
  border-bottom: 1px solid #f5f5f5;
  border-radius: 0;
  box-shadow: none;
`;

const Total = styled.div`
  padding-top: 1rem;
`;

const CartTotal = (props) => {
  const state = useStore()[0];

  return (
    <CARTTOTAL>
      <Prices>
        <NamePrice
          fontSize="1rem"
          text="Subtotal"
          price={state.financials.subTotal}
        />
        <NamePrice
          fontSize="1rem"
          discount
          text="Discount"
          price={state.financials.discount}
        />
        <NamePrice
          fontSize="1rem"
          text="Sales Tax"
          price={state.financials.salesTax}
        />
      </Prices>
      <Total>
        <NamePrice
          fontSize="1.5rem"
          text="Total"
          price={state.financials.totalPrice}
        />
      </Total>
    </CARTTOTAL>
  );
};

export default CartTotal;
