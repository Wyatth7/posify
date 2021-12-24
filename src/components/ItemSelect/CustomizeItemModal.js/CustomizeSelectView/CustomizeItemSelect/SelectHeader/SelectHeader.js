import React, { useState } from "react";
import styled from "styled-components";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

const SELECT_HEADER = styled.div`
  padding: 0 1rem;
  user-select: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ef7614;
  /* color: #ffffff; */
`;

const Title = styled.p``;

const SelectHeader = (props) => {
  const [selected, setSelected] = useState(false);

  const selectHandler = () => {
    setSelected(!selected);
    props.selected();
  };

  return (
    <SELECT_HEADER onClick={selectHandler}>
      {!selected ? <FiChevronRight /> : <FiChevronDown />}
      <Title>{props.title}</Title>
    </SELECT_HEADER>
  );
};

export default SelectHeader;
