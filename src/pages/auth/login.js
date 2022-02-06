import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   CardElement,
//   Elements,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";

import styled from "styled-components";
// import axios from "axios";

const LOGIN = styled.div``;

const Input = styled.input``;

const Button = styled.button``;

// const stripeInit = loadStripe(
//   "pk_test_51IGC2MKm15LThELZ2zWy8o019nMhps90zaUuzZZqJqTZWfDWIJ0ljocCyyn3b5n3V2hohsSd5eohWddAIseyRriD00uA3PTzqJ"
// );

const Login = (props) => {
  const email = useRef();
  const password = useRef();
  const history = useNavigate();

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

      const userObj = await user.json();
      localStorage.setItem("authToken", userObj.idToken);
      history("/kiosk");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LOGIN>
      <Input type="email" ref={email} required />
      <Input type="password" ref={password} required />
      <Button onClick={onSubmitHandler}>submit</Button>

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
