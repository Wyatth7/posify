import { initStore } from "./store";

const configurePriceStore = () => {
  const actions = {
    UPDATE_PRICE: (curState, priceObj) => {},
  };

  initStore(actions, {
    financials: { subTotal: 0, discount: 0, salesTax: 0, totalPrice: 0 },
  });
};

export default configurePriceStore;
