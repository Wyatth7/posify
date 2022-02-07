import axios from "axios";
import React, { useRef } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components";
import OrangeButton from "../../components/reusable/OrangeButton/OrangeButton";

const SIGN_UP = styled.div`
  padding: 1rem;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  width: 25%;
`;

const InputWrapper = styled.div`
  padding-bottom: 1rem;
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

const SignUp = (props) => {
  const history = useNavigate();

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();

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
      localStorage.setItem("authToken", res.data.authToken);
      history("/kiosk");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SIGN_UP>
      <InputContainer>
        <OrangeButton>Sign up</OrangeButton>
        <Reroute>
          <RerouteParagraph>Already have an account?</RerouteParagraph>
          <RerouteButton to="/signup">Login</RerouteButton>
        </Reroute>
      </InputContainer>
    </SIGN_UP>
  );
};

export default SignUp;
