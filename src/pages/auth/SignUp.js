import axios from "axios";
import React, { useRef } from "react";
import styled from "styled-components";

const SIGN_UP = styled.div``;

const SignUp = (props) => {
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
      const res = await axios.post("/api/v1/auth/signup", data);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SIGN_UP>
      <form onSubmit={formSubmitHandler}>
        <input type="email" required />
        <input type="password" required />
        <button>submit</button>
      </form>
    </SIGN_UP>
  );
};

export default SignUp;
