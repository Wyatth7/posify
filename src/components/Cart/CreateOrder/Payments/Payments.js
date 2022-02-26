import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import OrangeButton from "../../../reusable/OrangeButton/OrangeButton";

const PAYMENT = styled.div``;

const Payment = (props) => {
  const { formSubmitted, setPaymentId } = props;
  const [paymentElement, setpaymentElement] = useState();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (formSubmitted) {
      const func = async () => {
        try {
          const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
          });

          // const { id } = paymentMethod;
          setPaymentId(paymentMethod.id);
        } catch (err) {
          console.log(err);
          console.log("error in paymentjs");
        }
      };
      func();
    }
  }, [formSubmitted, setPaymentId, stripe, elements, paymentElement]);

  // const cardFill = () => {
  //   setTimeout(() => {
  //     setpaymentElement(elements.getElement(CardElement));
  //   }, 500);
  // };

  const checkoutHandler = async () => {
    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      const { id } = paymentMethod;
      console.log(id);

      // await axios.patch("http://localhost:8080/api/v1/kiosk/createOrder", {
      //   id,
      // });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <CardElement />
    </React.Fragment>
  );
};

export default Payment;
