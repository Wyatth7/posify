import { RequestHandler } from "express";
import { createCharge, createCustomer } from "../../payments/charges";

// Create order and process payment.

let orderNumber = 0;

interface IPaymentData {
  paymentType: string;
  paymentId: string;
}

interface ICreateOrderData {
  // Check, cash, card
  foodItemArray: object[];
  paymentData: IPaymentData;
}

export const createOrder: RequestHandler = async (req, res, next) => {
  try {
    const reqData: ICreateOrderData = {
      foodItemArray: req.body.foodItems,
      paymentData: req.body.paymentData,
    };

    //

    // stripe does not take decimal numbers.
    if (reqData.paymentData.paymentType === "card") {
      // Get price by finding the sum of all foodItems in the
      // foodItemArray.
      const payment = await createCharge(15600, reqData.paymentData.paymentId);
      console.log(payment);
    }

    res.status(200).json({
      status: "success",
      message: "Payment processed.",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "Could not process payment",
    });
  }
};

// Upon fulfilment of an order, move unfulfilled orders
// to fulfilled.
