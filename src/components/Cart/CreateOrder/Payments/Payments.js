import React, { useEffect } from "react";
import styled from "styled-components";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

// const PAYMENT = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: -1rem;
// `;

const Card = styled(CardElement)`
  padding: 1rem 0;
`;

const Payment = (props) => {
  const { formSubmitted, setPaymentId } = props;
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
          console.log(error);

          setPaymentId(paymentMethod.id);
        } catch (err) {
          console.log(err);
          console.log("error in paymentjs");
        }
      };
      func();
    }
  }, [formSubmitted, setPaymentId, stripe, elements]);

  return (
    <React.Fragment>
      <Card />
      {/* <OrangeButton onClick={onSubmitHandler}>Complete Order!</OrangeButton> */}
    </React.Fragment>
  );
};

export default Payment;
