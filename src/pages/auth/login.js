import React, { useEffect, useRef } from "react";
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
  const email = useRef();
  const password = useRef();
  const history = useNavigate();
  const dispatch = useStore(false)[1];
  // const inputs = [
  //   {
  //     type: "email",
  //     text: "Email",
  //   },
  //   {
  //     type: "password",
  //     text: "Password",
  //   },
  // ];

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

  const onSubmitHandler = async () => {
    try {
      const user = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAWNHDYgrfNpHZnwOLh4ejKOoI7hBhHTI0",
        {
          method: "POST",
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
            returnSecureToken: true,
          }),
        }
      );
      dispatch("UPDATE_AUTH_STATUS", true);
      const userObj = await user.json();
      localStorage.setItem("authToken", userObj.idToken);
      props.setLogin();
      console.log(userObj.idToken);
      history("/kiosk");
    } catch (err) {
      console.log(err);
      history("/login");
    }
  };

  return (
    <LOGIN>
      <Auth
        headerText="Login to order from Simon's BBQ"
        submit={onSubmitHandler}
        linkText="Don't have an account?"
        linkTitle="Sign up"
        link="/signup"
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
