import React from "react";
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
  font-size: ${(props) => (props.mobile ? "2rem" : "1.3rem")};
  padding: 0.5rem;
`;

const ControlText = styled.p`
  user-select: none;
  margin: 0 1rem;
  font-size: ${(props) => (props.mobile ? "2rem" : "1rem")};
`;

const QuantityController = (props) => {
  // const [count, setCount] = useState(props.amount);
  // const [price, setPrice] = useState(props.price);

  const countHandler = (isIncrement) => {
    props.amountFunction(isIncrement);
  };

  return (
    <QUANTITYCONTROLLER>
      <AmountControl>
        <ControlButton
          mobile={props.mobile}
          amount={props.amount}
          del
          onClick={() => countHandler(false)}
        >
          {props.amount > 1 ? <FiMinus /> : <FiTrash />}
        </ControlButton>
        <ControlText mobile={props.mobile}>{props.amount}</ControlText>
        <ControlButton
          mobile={props.mobile}
          amount={props.amount}
          del
          right
          onClick={() => countHandler(true)}
        >
          <FiPlus />
        </ControlButton>
      </AmountControl>
    </QUANTITYCONTROLLER>
  );
};

export default QuantityController;
