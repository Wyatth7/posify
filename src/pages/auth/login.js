import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "./../../store/store";
import styled from "styled-components";
import Auth from "./Auth";
import Input from "./../../components/reusable/Input/Input";
import { checkUserAuth } from "../../scripts/check-user-authentication";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   CardElement,
//   Elements,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";
// import axios from "axios";

const LOGIN = styled.div``;

const InputWrapper = styled.div`
  padding-bottom: 1rem;
`;

// const stripeInit = loadStripe(
//   "pk_test_51IGC2MKm15LThELZ2zWy8o019nMhps90zaUuzZZqJqTZWfDWIJ0ljocCyyn3b5n3V2hohsSd5eohWddAIseyRriD00uA3PTzqJ"
// );

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
        headerText="Login to order from Mom and Pop's Pizza"
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

      {/* <Elements stripe={stripeInit}>
        <Payment />
      </Elements> */}
    </LOGIN>
  );
};

// const Payment = (props) => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const checkoutHandler = async () => {
//     try {
//       const { error, paymentMethod } = await stripe.createPaymentMethod({
//         type: "card",
//         card: elements.getElement(CardElement),
//       });

//       const { id } = paymentMethod;
//       console.log(id);

//       // await axios.patch("http://localhost:8080/api/v1/kiosk/createOrder", {
//       //   id,
//       // });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <React.Fragment>
//       <CardElement />
//       <button onClick={checkoutHandler}>Submit</button>
//     </React.Fragment>
//   );
// };

export default Login;
