import { RequestHandler } from "express";
import IIngredients from "../../interfaces/IIngredients";
import BusinessModel from "../../models/BusinessModel";
import { IFoodItem } from "../../models/FoodItemModel";
import { IIngredientModel } from "../../models/IngredientModel";
import { IOrderModel } from "../../models/OrderModel";
import UserModel, { IUser } from "../../models/UserModel";
import { createCharge, createCustomer } from "../../payments/charges";

// Create order and process payment.

let orderNumber = 0;

interface IPriceItem {
  itemId: string;
}

interface IPaymentData {
  paymentType: string;
  paymentId: string;
}

interface ICreateOrderData {
  // Check, cash, card
  foodItemArray: string[];
  ingredientArray: string[];
  paymentData: IPaymentData;
  addressData: { address: string; state: string; zipCode: string };
}

export const createOrder: RequestHandler = async (req, res, next) => {
  try {
    const reqData: ICreateOrderData = {
      foodItemArray: req.body.foodItems,
      ingredientArray: req.body.ingredientItems,
      paymentData: req.body.paymentData,
      addressData: req.body.addressData,
    };

    const user = await UserModel.findById(req.authId);

    const userId = user?.businessId;

    // get user's associated business
    const business: any = await BusinessModel.findById(userId);

    if (!business) {
      next("Could not find business.");
    }

    let businessFoodItems: IFoodItem[] = business.foodItems;
    let businessIngredientItems: IIngredients[] = business?.ingredients;

    businessFoodItems = filterItemArrays(
      reqData.foodItemArray,
      businessFoodItems
    );

    businessIngredientItems = filterItemArrays(
      reqData.ingredientArray,
      businessIngredientItems
    );

    // get sum of all ingredients + foodItem price
    const orderTotal = getPriceData(businessIngredientItems, businessFoodItems);

    // stripe does not take decimal numbers.
    if (reqData.paymentData.paymentType === "card") {
      // Get price by finding the sum of all foodItems in the
      // foodItemArray.
      const payment = await createCharge(
        orderTotal,
        reqData.paymentData.paymentId
      );
      console.log(payment);
    }

    let orderNumber = 0;

    if (business.unfulfilledOrder.length > 0) {
      orderNumber -
        business.unfulfilledOrder[business.unfulfilledOrder.length - 1];
    }

    // const order: IOrderModel = {
    //   orderNumber: orderNumber++,
    //   foodItem: businessFoodItems;
    // }

    // const orderAdded = await UserModel.findByIdAndUpdate(business._id, {$push: })

    res.status(200).json({
      status: "success",
      message: "Payment processed.",
      data: { businessFoodItems, businessIngredientItems },
      total: orderTotal,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "Could not process payment",
    });
  }
};

const filterItemArrays = (idArray: string[], itemArray: any) => {
  return itemArray?.filter((el: any) => {
    return idArray.includes(el._id.toString());
  });
};

const getPriceData = (ingredients: IIngredients[], foodItems: IFoodItem[]) => {
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

const getTotalArrayPrice = (array: IFoodItem[] | IIngredients[]) => {
  let total = 0;
  array.forEach((e: any) => (total += e.price));
  return total;
};
