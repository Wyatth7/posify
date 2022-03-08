import axios from "axios";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../../components/reusable/Input/Input";
import { useStore } from "../../store/store";
import Auth from "./Auth";
import { checkUserAuth } from "../../scripts/check-user-authentication";

const SIGN_UP = styled.div`
  padding: 1rem;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  padding-bottom: 1rem;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1rem;
  width: 100%;
`;

const SignUp = (props) => {
  const dispatch = useStore()[1];
  const history = useNavigate();
  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const password = useRef("");
  const [isErr, setIsErr] = useState(false);

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

  const signUpUser = async () => {
    try {
      const data = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      await axios.post("/api/v1/auth/signUp ", data);
      return [data.email, data.password];
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SIGN_UP>
      <Auth
        headerText="Sign up to order from Simon's BBQ"
        linkText="Already have an account?"
        linkTitle="Login"
        link="/login"
        buttonText="Sign Up"
        func={signUpUser}
        errorText={"Could not create an account."}
        setLogin={props.setLogin}
      >
        <NameContainer>
          <Input ref={firstName} type="text" text="First Name" />
          <Input ref={lastName} type="text" text="Last Name" />
        </NameContainer>
        <InputWrapper>
          <Input ref={email} type="email" text="Email" />
        </InputWrapper>
        <InputWrapper>
          <Input ref={password} type="password" text="Password" />
        </InputWrapper>
      </Auth>
    </SIGN_UP>
  );
};

export default SignUp;
