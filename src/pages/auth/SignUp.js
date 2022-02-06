import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SIGN_UP = styled.div``;

const SignUp = (props) => {
  const history = useNavigate();

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();

  const formSubmitHandler = async (e) => {
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
      localStorage.setItem("authToken", res.data.authToken);
      history("/kiosk");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SIGN_UP>
      <form onSubmit={formSubmitHandler}>
        <input ref={firstName} type="text" required />
        <input ref={lastName} type="text" required />
        <input ref={email} type="email" required />
        <input ref={password} type="password" required />
        <button>submit</button>
      </form>
    </SIGN_UP>
  );
};

export default SignUp;
