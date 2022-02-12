import React, { useRef } from "react";
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
  const address = useRef();
  const state = useRef();
  const zipCode = useRef();

  return (
    <USER_ADDRESS>
      <MasterDiv>
        <Input ref={address} text="Address" type="text" />
      </MasterDiv>
      <StateAndZip>
        <Input ref={state} text="State" type="text" />
        <Input ref={zipCode} text="Zip code" type="text" />
      </StateAndZip>
    </USER_ADDRESS>
  );
};

export default UserAddress;
