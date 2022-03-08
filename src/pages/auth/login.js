import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "./../../store/store";
import styled from "styled-components";
import Auth from "./Auth";
import Input from "./../../components/reusable/Input/Input";
import { checkUserAuth } from "../../scripts/check-user-authentication";

const LOGIN = styled.div``;

const InputWrapper = styled.div`
  padding-bottom: 1rem;
`;

const Login = (props) => {
  const email = useRef("");
  const password = useRef("");
  const history = useNavigate();

  useEffect(() => {
    const func = async () => {
      const auth = await checkUserAuth();

      if (!auth) {
        return;
      }

      history("/kiosk");
    };

    func();
  }, [history]);

  const emailAndPass = () => {
    return [email.current.value, password.current.value];
  };

  return (
    <LOGIN>
      <Auth
        headerText="Login to order from Simon's BBQ"
        linkText="Don't have an account?"
        linkTitle="Sign up"
        link="/signup"
        buttonText="Login"
        errorText={"Invalid email or password."}
        func={emailAndPass}
        setLogin={props.setLogin}
      >
        <InputWrapper>
          <Input ref={email} type="email" text="Email" />
        </InputWrapper>
        <InputWrapper>
          <Input ref={password} type="password" text="Password" />
        </InputWrapper>
      </Auth>
    </LOGIN>
  );
};

export default Login;
