// import { initStore } from "./store";

// const findObjAndIndex = (arr, obj) => {
//   const object = arr.find((el) => el.id === obj.id);

//   let index = undefined;
//   if (object !== undefined) {
//     index = arr.findIndex((el) => el.id === obj.id);
//   }

//   return [object, index];
// };

// const configureCartStore = () => {
//   const actions = {
//     EDIT_ITEM_AMOUNT: (curState, productObj) => {
//       let incriment = 1;
//       if (!productObj.isIncriment) {
//         incriment = -1;
//       }

//       const [product, productIndex] = findObjAndIndex(
//         curState.cartProducts,
//         productObj
//       );

//       console.log(product);

//       if (product) {
//         let newArray = curState.cartProducts;
//         product.amount += incriment;

//         if (product.amount < 1) {
//           newArray.splice(productIndex, 1);
//           return { cartProducts: newArray };
//         }

//         newArray.splice(productIndex, 1, product);
//         return { cartProducts: newArray };
//       }

//       return { cartProducts: [] };
//     },
//   };
//   initStore(actions, { cartProducts: [] });
// };

// export default configureCartStore;
