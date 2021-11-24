import React from "react";
import styled from "styled-components";

const MOBILECART = styled.div`
  cursor: pointer;
  width: 100%;
  z-index: 1000;
  padding: 1rem;
  /* margin: 1rem; */
  margin: 1rem 1rem;
  background-color: #ef7614;
  border: 1px solid #ef7614;
  border-radius: 10px;
  box-shadow: 1px 1px 15px 0px #ef7614;
  overflow: auto;
  transition: all 0.2s;

  &:hover {
    box-shadow: 1px 1px 20px 2px #ef7614;
  }
`;

const Header = styled.p`
  color: #ffffff;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
`;

const MobileCart = (props) => {
  return (
    <MOBILECART onClick={props.clicked}>
      <Header>Current Order $37.50</Header>
    </MOBILECART>
  );
};

export default MobileCart;
