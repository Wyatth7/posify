import React, { useRef } from "react";

import styled from "styled-components";

const LOGIN = styled.div``;

const Input = styled.input``;

const Button = styled.button``;

const Login = (props) => {
  const email = useRef();
  const password = useRef();

  const onSubmitHandler = async () => {
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

    const userObj = await user.json();
    console.log(userObj.idToken);
  };

  return (
    <LOGIN>
      <Input type="email" ref={email} required />
      <Input type="password" ref={password} required />
      <Button onClick={onSubmitHandler}>submit</Button>
    </LOGIN>
  );
};

export default Login;
