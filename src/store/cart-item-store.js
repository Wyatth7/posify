import ArraySorter from "../scripts/array-sorters";
import { initStore } from "./store";

const clearedFinancials = {
  subTotal: 0,
  discount: 0,
  salesTax: 0,
  totalPrice: 0,
};

const findObjAndIndex = (arr, obj) => {
  const object = arr.find((el) => el.id === obj.id);
  console.log(object);
  let index = undefined;
  if (object !== undefined) {
    index = arr.findIndex((el) => el.id === obj.id);
  }

  return [object, index];
};

const updateFinancials = (financials, newItemPrice, add = true) => {
  let newFinancials = { ...financials };

  if (add) {
    newFinancials.subTotal += newItemPrice;
  } else {
    newFinancials.subTotal -= newItemPrice;
  }

  newFinancials.totalPrice =
    newFinancials.subTotal - newFinancials.discount - newFinancials.salesTax;

  return newFinancials;
};

const configureCartStore = () => {
  const actions = {
    ADD_CART_ITEM: (curState, productObj) => {
      let oldArray = curState.cartProducts;

      const product = oldArray.find((el) => el.id === productObj.id);
      let index = undefined;
      if (product !== undefined) {
        index = oldArray.findIndex((el) => el.id === productObj.id);
      }

      if (!productObj.baseEditPrice) {
        productObj.baseEditPrice = productObj.basePrice;
      }

      let newArray = oldArray;
      let updatedProduct = {};
      if (product === undefined || index === undefined) {
        updatedProduct = {
          ...productObj,
          amount: 1,
        };
        newArray.push(updatedProduct);
      } else {
        updatedProduct = {
          ...productObj,
          amount: product.amount + 1,
        };
        newArray.splice(index, 1, updatedProduct);
      }

      return {
        cartProducts: newArray,
        financials: updateFinancials(curState.financials, updatedProduct.price),
      };
    },
    CLEAR_CART: (curState) => {
      return {
        cartProducts: [],
        financials: clearedFinancials,
      };
    },
    EDIT_ITEM_AMOUNT: (curState, productObj) => {
      let incriment = 1;
      if (!productObj.isIncriment) {
        incriment = -1;
      }

      // If incrementing, add item price to subtotal.
      // If decrementing, subtract item price to subtotal.
      let financial = {};
      if (productObj.isIncriment) {
        financial = updateFinancials(curState.financials, productObj.price);
      } else {
        financial = updateFinancials(
          curState.financials,
          productObj.price,
          false
        );
      }

      const [product, productIndex] = findObjAndIndex(
        curState.cartProducts,
        productObj
      );
      console.log(product);
      if (product !== undefined) {
        let newArray = curState.cartProducts;
        product.amount += incriment;

        // Removes item from cart if amount is less than 1.
        if (product.amount < 1) {
          newArray.splice(productIndex, 1);
          return { cartProducts: newArray, financials: financial };
        }

        product.price = product.amount * product.baseEditPrice;

        // Updates item in the array. (replaces old item and adds the updated version.)
        newArray.splice(productIndex, 1, product);
        console.log(newArray);
        return { cartProducts: newArray, financials: financial };
      }

      return { cartProducts: curState.cartProducts };
    },
    OPEN_CUSTOMIZE_MODAL: (curState, productObj) => {
      let newObj = { ...productObj };

      // newObj.id = Math.random();
      newObj.price =
        ArraySorter.getTotalIngredientPrice(newObj.ingredients) +
        newObj.basePrice;

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
