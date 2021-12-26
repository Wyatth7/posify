import { initStore } from "./store";

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

const customizeItemStore = () => {
  const actions = {
    UPDATE_CUSTOMIZED_ITEM: (curstate, projectObj) => {},
    ADD_ITEM_INGREDIENTS: (curState, ingredientId) => {
      return {
        curCustomizeObj: {
          ...editIngredients(curState.curCustomizeObj, true, ingredientId),
        },
      };
    },
    REMOVE_ITEM_INGREDIENTS: (curState, ingredientId) => {
      return {
        curCustomizeObj: {
          ...editIngredients(curState.curCustomizeObj, false, ingredientId),
        },
      };
    },
  };
  initStore(actions, { curCustomizeObj: {} });
};

export default customizeItemStore;
