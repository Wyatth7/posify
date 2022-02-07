import { initStore } from "./store";

const configureAuthStore = () => {
  const actions = {
    UPDATE_AUTH_STATUS: (curState, bool) => {
      return { isLoggedIn: bool };
    },
  };

  initStore(actions, {
    financials: { subTotal: 0, discount: 0, salesTax: 0, totalPrice: 0 },
  });
};

export default configureAuthStore;
