import stripe from "./init-stripe";

export const createCharge = async (amount: number, customerId: string) => {
  try {
    return await stripe.charges.create({
      amount,
      currency: "usd",
      customer: customerId,
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
