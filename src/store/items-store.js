import { initStore } from "./store";

const configureProductStore = () => {
  const actions = {
    ADD_ITEMS: (curState, initState) => {
      return { products: curState.products };
    },
  };

  initStore(actions, {});
};

export default configureProductStore;
