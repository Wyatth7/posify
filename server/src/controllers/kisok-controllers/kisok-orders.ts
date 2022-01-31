import { RequestHandler } from "express";
import { createCharge, createCustomer } from "../../payments/charges";
// handle card payments, and upon completion of payment,
// add orders to unfulfilled orders section.
// use stripe to handle payments.

export const createOrder: RequestHandler = async (req, res, next) => {
  try {
    const reqData = {
      name: req.body.name,
      email: req.body.email,
      source: req.body.stripeToken,
    };
    const createUser = await createCustomer(
      reqData.name,
      reqData.email,
      reqData.source
    );
    const chargeUser = await createCharge(1, createUser.id);
    console.log(chargeUser);

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
