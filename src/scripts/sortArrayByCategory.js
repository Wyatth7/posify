// Will move to server later in development life cycle

import { findAllByRole } from "@testing-library/react";

// take in array then return an array of objects with
// category title, and array of ingredients in said category.
const sortArrayByCategory = (array) => {
  let finalArr = [];

  array.forEach((el) => {
    if (finalArr.some((e) => e.category === el.category)) {
      finalArr = updateObject(finalArr, el);
      return;
    }
    finalArr.push(createObj(el));
  });

  return finalArr;
};

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

export default sortArrayByCategory;
