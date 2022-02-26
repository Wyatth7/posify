import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useStripe } from "@stripe/react-stripe-js";
import React, { useRef, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CheckBox from "../../reusable/CheckBox/CheckBox";
import OrangeButton from "../../reusable/OrangeButton/OrangeButton";
import UserAddress from "../../reusable/UserAddress/UserAddress";
import OrderQuestions from "./OrderQuestions/OrderQuestions";
import Payment from "./Payments/Payments";
import { useStore } from "./../../../store/store";

const CREATE_ORDER = styled.div``;

const Buffer = styled.div`
  padding: 0.5rem 0;
`;

// const form
const stripeInit = loadStripe(
  "pk_test_51IGC2MKm15LThELZ2zWy8o019nMhps90zaUuzZZqJqTZWfDWIJ0ljocCyyn3b5n3V2hohsSd5eohWddAIseyRriD00uA3PTzqJ"
);

const CreateOrder = (props) => {
  const [paymentType, setPaymentType] = useState("card");
  const [receiveType, setReceiveType] = useState("pickup");
  const [paymentElement, setPaymentElement] = useState();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const store = useStore()[1];

  const togglePaymentHandler = (name) => {
    setPaymentType(name);
  };

  const toggleReceiveHandler = (name) => {
    setReceiveType(name);
  };

  const setPaymentId = (id) => {
    setPaymentElement(id);
  };

  const onSubmitHandler = async () => {
    try {
      setFormSubmitted(true);
      // if (paymentType === "card") {
      //   // const { error, paymentMethod } = await stripe.createPaymentMethod({
      //   //   type: "card",
      //   //   card: paymentElement,
      //   // });
      //   // paymentId = paymentMethod.id;
      // }

      const paymentData = {
        paymentType,
        paymentId: paymentElement,
      };

      const foodItemIds = store.cartProducts.map((el) => el.id);

      await axios.patch("http://localhost:8080/api/v1/kiosk/createOrder", {
        paymentData,
        foodItems: foodItemIds,
        ingredientItems: [],
      });
    } catch (err) {
      setFormSubmitted(false);
      console.log(err);
    }
  };

  return (
    <CREATE_ORDER>
      <OrderQuestions
        currentlySelected={receiveType}
        toShowComponent="delivery"
        component={<UserAddress />}
        text="Will your order be for pickup or delivery?"
      >
        <CheckBox
          change={toggleReceiveHandler}
          current={receiveType}
          itemName="pickup"
          text="Pickup"
        />
        <CheckBox
          change={toggleReceiveHandler}
          current={receiveType}
          itemName="delivery"
          text="Delivery"
        />
      </OrderQuestions>
      <OrderQuestions text="Select a payment type.">
        <CheckBox
          change={togglePaymentHandler}
          itemName="card"
          current={paymentType}
          checked={true}
          text="Card"
        />
        <CheckBox
          change={togglePaymentHandler}
          current={paymentType}
          itemName="cash"
          checked={false}
          text="Cash"
        />
        <CheckBox
          change={togglePaymentHandler}
          current={paymentType}
          itemName="check"
          checked={false}
          text="Check"
        />
      </OrderQuestions>
      {paymentType === "card" ? (
        <Elements stripe={stripeInit}>
          <Payment
            formSubmitted={formSubmitted}
            setPaymentId={setPaymentId}
            completeCheckoutHandler=""
          />
        </Elements>
      ) : null}
      <Buffer />
      <OrangeButton onClick={onSubmitHandler}>Complete Order!</OrangeButton>
    </CREATE_ORDER>
  );
};

export default CreateOrder;