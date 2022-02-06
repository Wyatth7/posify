import stripe from "./init-stripe";

export const createCharge = async (amount: number, id: string) => {
  try {
    return await stripe.paymentIntents.create({
      amount: amount,
      currency: "USD",
      description: "Your Company Description",
      payment_method: id,
      confirm: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createCustomer = async (
  name: string,
  email: string,
  userToken: string
) => {
  try {
    return await stripe.customer.create({
      name,
      email,
      source: userToken,
    });
  } catch (err) {
    console.log(err);
  }
};
