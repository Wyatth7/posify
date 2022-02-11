import axios from "axios";
import React, { useRef, useEffect } from "react";
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
  gap: 1rem;
  padding-bottom: 1rem;
`;

const SignUp = (props) => {
  const dispatch = useStore()[1];
  const history = useNavigate();
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();

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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    try {
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/signUp ",
        data
      );
      // const user = await fetch(
      //   "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAWNHDYgrfNpHZnwOLh4ejKOoI7hBhHTI0",
      //   {
      //     method: "POST",
      //     body: JSON.stringify({
      //       email: email.current.value,
      //       password: password.current.value,
      //       returnSecureToken: true,
      //     }),
      //   }
      // );
      // const userObj = await user.json();
      dispatch("UPDATE_AUTH_STATUS", true);
      localStorage.setItem("authToken", res.data.authToken);

      props.setLogin();
      history("/kiosk");
    } catch (e) {
      console.log(e);
      history("/signup");
    }
  };

  return (
    <SIGN_UP>
      <Auth
        headerText="Sign up to order from Mom and Pop's Pizza"
        submit={onSubmitHandler}
        linkText="Already have an account?"
        linkTitle="Login"
        link="/login"
      >
        <NameContainer>
          <Input ref={firstName} type="text" text="First Name" />
          <Input ref={lastName} type="text" text="Last Name" />
        </NameContainer>
        <InputWrapper>
          <Input type="email" text="Email" />
        </InputWrapper>
        <InputWrapper>
          <Input type="password" text="Password" />
        </InputWrapper>
      </Auth>
    </SIGN_UP>
  );
};

export default SignUp;
