import { initStore } from "./store";

const configureCategoryStore = () => {
  const actions = {
    ADD_KIOSK_CATEGORIES: (curState, categories) => {
      return {
        foodItemCategories: categories,
      };
    },
    UPDATE_FOODITEMS_BY_CATEGORY: (curState, foodItems) => {
      return { products: [...foodItems] };
    },
    UPDATE_KIOSK_ITEM_LOADER: (curState, bool) => {
      return { kioskItemLoader: bool };
    },
  };

  initStore(actions);
};

export default configureCategoryStore;
