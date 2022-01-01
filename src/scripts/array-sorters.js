// creates object from array information
const createObj = (obj) => {
  return {
    category: obj.category,
    items: [
      {
        id: obj.id,
        title: obj.title,
        price: obj.price,
      },
    ],
  };
};

const updateObject = (arr, obj) => {
  const returnArr = [...arr];
  returnArr.forEach((el) => {
    if (el.category === obj.category) {
      el.items.push({
        id: obj.id,
        title: obj.title,
        price: obj.price,
      });
    }
  });

  return returnArr;
};

class ArraySorter {
  // Will move to server later in development life cycle

  // take in array then return an array of objects with
  // category title, and array of ingredients in said category.
  static sortArrayByCategory(array) {
    let finalArr = [];

    array.forEach((el) => {
      if (finalArr.some((e) => e.category === el.category)) {
        finalArr = updateObject(finalArr, el);
        return;
      }
      finalArr.push(createObj(el));
    });

    return finalArr;
  }

  /**
   * Returns cumulative price of an items ingredients.
   * @param {Array} idArray array of ingredient ids
   * @param {Array} ingredients array of ingredients
   */
  static getTotalIngredientPrice(idArray, ingredientArray) {
    if (idArray.length === 0) {
      return 0;
    }
    let totalPrice = 0;

    for (let i = 0; i < idArray.length; i++) {
      for (let j = 0; j < ingredientArray.length; j++) {
        if (idArray[i] === ingredientArray[j].id) {
          totalPrice += ingredientArray[j].price;
        }
      }
    }

    return totalPrice;
  }
}

export default ArraySorter;
