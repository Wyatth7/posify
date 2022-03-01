import { RequestHandler } from "express";
import BusinessModel from "../../models/BusinessModel";
import { IFoodItem } from "../../models/FoodItemModel";
import UserModel from "../../models/UserModel";
import * as interfaces from "./interfaces/kiosk-order-interfaces";

export const createOrder: RequestHandler = async (req, res, next) => {
  try {
    const reqData: interfaces.ICreateOrderData = {
      foodItem: req.body.foodItems,
      paymentData: req.body.paymentData,
      paymentType: req.body.paymentType,
      addressData: req.body.addressData,
      customerInfo: req.body.customerInfo,
      deliveryMethod: req.body.deliveryMethod,
    };

    // Get user and business data
    const user = await UserModel.findById(req.authId);

    const userId = user?.businessId;

    const business: any = await BusinessModel.findById(userId);

    if (!business) {
      next("Could not find business.");
    }

    // get all ingredients and foodItems
    let businessFoodItems: IFoodItem[] = business.foodItems;
    let businessIngredientItems: interfaces.IIngredients[] =
      business?.ingredients;

    // get array of food item data
    businessFoodItems = filterItemArrays(
      reqData.foodItem.map((e) => e.id),
      businessFoodItems
    );

    // get all possible ingredients given by user.
    const { filteredIngredients, filteredFoodItems } = removeRepeatedIds(
      reqData.foodItem
    );

    // All ingredients in order.
    const ingredients = filterItemArrays(
      filteredIngredients,
      businessIngredientItems
    );

    const foodItems = filterItemArrays(filteredFoodItems, businessFoodItems);

    // completed foodItem array and order total
    const finalizedItems = collectAllOrderedItems(
      reqData.foodItem,
      foodItems,
      ingredients
    );

    // // get sum of all ingredients + foodItem price

    // // stripe does not take decimal numbers.
    // if (reqData.paymentData.paymentType === "card") {
    // const orderTotal = getPriceData(businessIngredientItems, businessFoodItems);
    //   // Get price by finding the sum of all foodItems in the
    //   // foodItemArray.
    //   const payment = await createCharge(
    //     orderTotal,
    //     reqData.paymentData.paymentId
    //   );
    //   console.log(payment);
    // }

    let orderNumber = 0;

    if (business.unfulfilledOrder.length > 0) {
      orderNumber =
        business.unfulfilledOrder.length + business.fulfilledOrder.length;
    }

    const order: interfaces.ICompleteOrder = {
      orderNumber,
      foodItem: finalizedItems.finalFoodItemArray,
      addressData: reqData.addressData,
      paymentType: reqData.paymentType,
      deliveryMethod: reqData.deliveryMethod,
      customerInfo: reqData.customerInfo,
      totalPrice: finalizedItems.totalPrice,
    };

    const orderAdded = await BusinessModel.findByIdAndUpdate(business._id, {
      $push: { unfulfilledOrder: order },
    });

    res.status(200).json({
      status: "success",
      message: "Order created.",
      data: orderAdded,
      // total: orderTotal,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "Could not create order.",
    });
  }
};

/**
 * removes duplicate ingredient ids.
 * @param foodItemArray Array of food items sent with user request
 * @returns Array of non-repeated ingredient ids
 */
const removeRepeatedIds = (foodItemArray: interfaces.IFoodItemObject[]) => {
  let possibleIngredientsArray: string[] = [];
  let possibleFoodItemsArray: string[] = [];

  // populate ingredientArr with all ingredients
  // provided with the request.
  foodItemArray.forEach((el) => {
    possibleIngredientsArray = [...possibleIngredientsArray, ...el.ingredients];
    possibleFoodItemsArray.push(el.id);
  });

  // remove duplicate ingredient strings.
  return {
    filteredIngredients: [...new Set(possibleIngredientsArray)],
    filteredFoodItems: [...new Set(possibleFoodItemsArray)],
  };
};

/**
 * finds total price of order, and organizes foodItems.
 * removes any foodItem or ingredient that is not contained in the database.
 * @param foodItemArray Array of food item ids
 * @param availableFoodItems Array of complete foodItems
 * @param availableIngredients Array of complete ingredients
 * @returns Array of foodItem ids and its ingredients, and totalPrice of order.
 */
const collectAllOrderedItems = (
  foodItemArray: interfaces.IFoodItemObject[],
  availableFoodItems: IFoodItem[],
  availableIngredients: interfaces.IIngredients[]
) => {
  let totalPrice = 0;
  let finalFoodItemArray: interfaces.IFoodItemObject[] = [];

  // Find the sum of all fooditems and ingredients.
  foodItemArray.forEach((foodItem) => {
    // object to push to finalFoodItemArray.
    let tempFoodObj: interfaces.IFoodItemObject = {
      id: "",
      ingredients: [],
      quantity: 1,
    };
    // initial price of foodItem
    const foundFoodItem = availableFoodItems.find(
      (e) => e._id.toString() === foodItem.id
    );

    if (!foundFoodItem) {
      return;
    }

    tempFoodObj.id = foundFoodItem?._id.toString();
    tempFoodObj.quantity = foodItem.quantity;

    const initItemPrice = foundFoodItem?.initPrice;

    let totalIngredientPrice = 0;
    // Find total price of ingredients.
    foodItem.ingredients.forEach((ingredientId) => {
      // current element from given ingredient id.
      const curIngredient = availableIngredients.find(
        (e) => e._id.toString() === ingredientId
      );
      // if ingredient exists, add its price to totalIngredientPrice.
      if (curIngredient) {
        totalIngredientPrice += curIngredient.price;
        // Add ingredients to tempObj.
        tempFoodObj.ingredients.push(curIngredient._id.toString());
      }
    });

    // upate total price.
    totalPrice += (initItemPrice + totalIngredientPrice) * foodItem.quantity;
    finalFoodItemArray.push(tempFoodObj);
  });

  // return foodItemArray and totalPrice.
  return { finalFoodItemArray, totalPrice };
};

/**
 * takes a string[] of ids from the request and compares them to
 * known foodItems or ingredients. If an id exists on the foodItem/ingredient
 * array, add that object to an array.
 * @param idArray Array of id's (ingredient or foodItem)
 * @param itemArray Array of items retrieved from server (ingredient or foodItem)
 * @returns string[] of item ids that match with known foodItems/ingredients
 */
const filterItemArrays = (idArray: string[], itemArray: any) => {
  return itemArray?.filter((el: any) => {
    return idArray.includes(el._id.toString());
  });
};

/**
 * gets the total price of an order.
 * @param ingredients array of ingredients.
 * @param foodItems array of foodItems
 * @returns total order price
 */
const getPriceData = (
  ingredients: interfaces.IIngredients[],
  foodItems: IFoodItem[]
) => {
  const total = getTotalArrayPrice(ingredients) + getTotalArrayPrice(foodItems);
  let totalString = total.toString();

  if (total % 1 === 0) {
    totalString = totalString.concat("00");
  } else {
    totalString = totalString.replace(".", "");
  }

  console.log(totalString);

  return parseInt(totalString);
};

/**
 * Sums items and ingredient prices.
 * @param array foodItem array or ingredient array
 * @returns total calculated price
 */
const getTotalArrayPrice = (array: IFoodItem[] | interfaces.IIngredients[]) => {
  let total = 0;
  array.forEach((e: any) => (total += e.price));
  return total;
};
