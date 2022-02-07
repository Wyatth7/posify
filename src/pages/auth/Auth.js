import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import Input from "./../../components/reusable/Input/Input";
import OrangeButton from "./../../components/reusable/OrangeButton/OrangeButton";

const AUTH = styled.div`
  padding: 1rem;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

const HeaderText = styled.h1`
  color: #ef7614;
  font-size: 1.7rem;
  font-weight: 400;
  text-align: center;
`;

const InputContainer = styled.div`
  width: 25%;
`;

const Inputs = styled.div``;

const Reroute = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

const RerouteParagraph = styled.p`
  font-size: 0.8rem;
`;

const RerouteButton = styled(NavLink)`
  font-size: 0.8rem;
  color: #ef7614;
  margin-left: 0.2rem;
  /* border-bottom: 1px solid #ef7614; */
`;

const Auth = (props) => {
  return (
    <AUTH>
      <Header>
        <HeaderText>{props.headerText}</HeaderText>
      </Header>
      <InputContainer>
        <Inputs>{props.children}</Inputs>
        {/* <InputWrapper>
          <Input text="Email" type="email" />
        </InputWrapper>
        <InputWrapper>
          <Input text="Password" type="password" />
        </InputWrapper> */}
        <OrangeButton clicked={props.submit}>Login</OrangeButton>
        <Reroute>
          <RerouteParagraph>{props.linkText}</RerouteParagraph>
          <RerouteButton to={props.link}>{props.linkTitle}</RerouteButton>
        </Reroute>
      </InputContainer>

      {/* <Elements stripe={stripeInit}>
        <Payment />
      </Elements> */}
    </AUTH>
  );
};

export default Auth;
