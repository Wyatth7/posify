import React, { useState } from "react";
import styled from "styled-components";
import { FiTrash, FiPlus, FiMinus } from "react-icons/fi";

const QUANTITYCONTROLLER = styled.div``;

const AmountControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ControlButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #faecee;
  background-color: ${(props) =>
    props.right
      ? `#faecee`
      : props.amount > 1 && props.del
      ? `#faecee`
      : `#ed5675`};
  color: ${(props) =>
    props.right
      ? `#000000 `
      : props.amount > 1 && props.del
      ? `#000000`
      : `#ffffff`};
  border-radius: 10px;
  font-size: ${(props) => (props.mobile ? "2rem" : "1rem")};
  padding: 0.5rem;
`;

const ControlText = styled.p`
  margin: 0 1rem;
  font-size: ${(props) => (props.mobile ? "2rem" : "1rem")};
`;

const QuantityController = (props) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(props.price);

  const countHandler = (amount) => {
    setCount(count + amount);
    setPrice(price + props.price);
  };

  const increaseHandler = () => {
    countHandler(1);
    props.priceFunc(props.price);
  };

  const decreaseHandler = () => {
    if (count === 1) {
      console.log("deleting");
      return;
    }

    countHandler(-1);
    props.priceFunc(-props.price);
  };

  return (
    <QUANTITYCONTROLLER>
      <AmountControl>
        <ControlButton
          mobile={props.mobile}
          amount={count}
          del
          onClick={decreaseHandler}
        >
          {count > 1 ? <FiMinus /> : <FiTrash />}
        </ControlButton>
        <ControlText mobile={props.mobile}>{count}</ControlText>
        <ControlButton
          mobile={props.mobile}
          amount={count}
          del
          right
          onClick={increaseHandler}
        >
          <FiPlus />
        </ControlButton>
      </AmountControl>
    </QUANTITYCONTROLLER>
  );
};

export default QuantityController;
