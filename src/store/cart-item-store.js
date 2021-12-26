import { initStore } from "./store";

const findObjAndIndex = (arr, obj) => {
  const object = arr.find((el) => el.id === obj.id);
  console.log(object);
  let index = undefined;
  if (object !== undefined) {
    index = arr.findIndex((el) => el.id === obj.id);
  }

  return [object, index];
};

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

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

      console.log(newArray);
      return {
        cartProducts: newArray,
      };
    },
    EDIT_ITEM_AMOUNT: (curState, productObj) => {
      let incriment = 1;
      if (!productObj.isIncriment) {
        incriment = -1;
      }

      const [product, productIndex] = findObjAndIndex(
        curState.cartProducts,
        productObj
      );
      console.log(product);
      if (product !== undefined) {
        let newArray = curState.cartProducts;
        product.amount += incriment;

        if (product.amount < 1) {
          newArray.splice(productIndex, 1);
          return { cartProducts: newArray };
        }

        product.price = priceFormatter.format(
          product.amount * product.initPrice
        );

        newArray.splice(productIndex, 1, product);
        console.log(newArray);
        return { cartProducts: newArray };
      }

      return { cartProducts: curState.cartProducts };
    },
    OPEN_CUSTOMIZE_MODAL: (curState, productObj) => {
      let newObj = { ...productObj };

      newObj.id = Math.random();
      console.log(productObj);

      return {
        customizeModal: true,
        curCustomizeObj: {
          ...newObj,
        },
      };
    },
    CLOSE_CUSTOMIZE_MODAL: () => {
      return { customizeModal: false, curCustomizeObj: {} };
    },
  };
  initStore(actions, { cartProducts: [] });
};

export default configureCartStore;
