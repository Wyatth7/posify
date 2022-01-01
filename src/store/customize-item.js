import { initStore } from "./store";
import priceFormatter from "./../scripts/price-formatter";
import ArraySorter from "../scripts/array-sorters";

const editIngredients = (obj, add, ingredientId) => {
  let ingredientArray = [...obj.ingredients];
  let ingredientObject = { ...obj };

  if (add) {
    ingredientArray.push(ingredientId);
  } else {
    const index = ingredientArray.findIndex((el) => el === ingredientId);
    ingredientArray.splice(index, 1);
  }

  ingredientObject.ingredients = [...ingredientArray];

  return ingredientObject;
};

const updateItemPrice = (ingredients, price, globalIngredients) => {
  return priceFormatter.format(
    ArraySorter.getTotalIngredientPrice(ingredients, globalIngredients) + price
  );
};

const customizeItemStore = () => {
  const actions = {
    UPDATE_CUSTOMIZED_ITEM: (curstate, projectObj) => {},
    ADD_ITEM_INGREDIENTS: (curState, ingredientId) => {
      let newObject = {
        ...editIngredients(curState.curCustomizeObj, true, ingredientId),
      };

      newObject.price = updateItemPrice(
        newObject.ingredients,
        newObject.basePrice,
        curState.ingredients
      );

      return {
        curCustomizeObj: {
          ...newObject,
        },
      };
    },
    REMOVE_ITEM_INGREDIENTS: (curState, ingredientId) => {
      let newObject = {
        ...editIngredients(curState.curCustomizeObj, false, ingredientId),
      };

      newObject.price = updateItemPrice(
        newObject.ingredients,
        newObject.basePrice,
        curState.ingredients
      );

      return {
        curCustomizeObj: {
          ...newObject,
        },
      };
    },
  };
  initStore(actions, { curCustomizeObj: {} });
};

export default customizeItemStore;
