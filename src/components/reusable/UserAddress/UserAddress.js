import React from "react";
import styled, { keyframes } from "styled-components";
import Input from "../Input/Input";

const RenderAnimation = keyframes`
 0% {margin-right: -10rem; opacity: 0}
 100%{margin-right: 0; opacity: 100}
`;

const USER_ADDRESS = styled.div`
  animation: ${RenderAnimation} 0.3s;
  animation-timing-function: linear;
`;

const MasterDiv = styled.div`
  padding: 0.5rem 0;
`;

const StateAndZip = styled(MasterDiv)`
  display: flex;
  gap: 1rem;
`;

const UserAddress = (props) => {
  return (
    <USER_ADDRESS>
      <StateAndZip>
        <Input ref={props.address} text="Address" type="text" />
        <Input ref={props.city} text="City" type="text" />
      </StateAndZip>
      <StateAndZip>
        <Input ref={props.state} text="State" type="text" />
        <Input ref={props.zipCode} text="Zip code" type="text" />
      </StateAndZip>
    </USER_ADDRESS>
  );
};

export default UserAddress;
