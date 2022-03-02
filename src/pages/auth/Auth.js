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
  position: relative;
`;

const BackgroundImage = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("/images/auth/app-preview.png");
  filter: blur(2.5px);
  background-size: cover;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
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

const AuthWrapper = styled.div`
  background-color: #ffff;
  border: 1px solid #ef7614;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  z-index: 1000;
`;

const InputContainer = styled.div`
  width: 90%;
`;

const Inputs = styled.div`
  width: 100%;
`;

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
      <BackgroundImage></BackgroundImage>
      <AuthWrapper>
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
      </AuthWrapper>

      {/* <Elements stripe={stripeInit}>
        <Payment />
      </Elements> */}
    </AUTH>
  );
};

export default Auth;
