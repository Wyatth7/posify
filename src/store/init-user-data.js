import { initStore } from "./store";

const configureUserKioskStore = () => {
  const actions = {
    INIT_USER_KIOSK: (curState, userData) => {
      return {
        products: userData.foodItems,
        ingredients: userData.ingredients,
      };
    },
  };

  initStore(actions);
};

export default configureUserKioskStore;
