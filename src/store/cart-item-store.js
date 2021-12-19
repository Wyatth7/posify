import { initStore } from "./store";

const configureCartStore = () => {
  const actions = {
    ADD_CART_ITEM: (curState, productObj) => {
      let oldArray = curState.cartProducts;

      const product = oldArray.find((el) => el.id === productObj.id);

      let index = undefined;
      if (product !== undefined) {
        index = oldArray.findIndex((el) => el.id === productObj.id);
      }

      let newArray = oldArray;
      let updatedProduct = {};
      if (product === undefined || index === undefined) {
        updatedProduct = { ...productObj, amount: 1 };
        newArray.push(updatedProduct);
      } else {
        updatedProduct = { ...productObj, amount: product.amount + 1 };
        newArray.splice(index, 1, updatedProduct);
      }

      return {
        cartProducts: newArray,
      };
    },
  };
  initStore(actions, { cartProducts: [] });
};

export default configureCartStore;
