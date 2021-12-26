import { initStore } from "./store";

const editIngredients = (obj, add, ingredientId) => {
  let ingredientArray = [...obj.ingredients];
  let ingredientObject = { ...obj };

  if (add) {
    ingredientArray.push(ingredientId);
  } else {
    ingredientArray.filter((e) => e === ingredientId);
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
    REMOVE_ITEM_INGREDIENTS: (curState, ingredientId) => {},
  };
  initStore(actions, { curCustomizeObj: {} });
};

export default customizeItemStore;
