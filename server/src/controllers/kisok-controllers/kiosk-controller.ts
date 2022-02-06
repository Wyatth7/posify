import { RequestHandler } from "express";
import IIngredient from "../../interfaces/IIngredients";
import IFoodItem from "../../interfaces/IFoodItem";
import admin from "../../auth/firebase/init-app";
import UserModel from "../../models/UserModel";
import BusinessModel from "../../models/BusinessModel";

// Gets user and business starting from user id.
const getUserAndBusiness = async (userId: string) => {
  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return [null, null];
    }

    const business = await BusinessModel.findById(user.businessId);

    return [user, business];
  } catch (err) {
    return [null, null];
  }
};

export const getInitData: RequestHandler = async (req, res, next) => {
  try {
    // const foodItems = await FoodItemModel.find();
    // const ingredients = await IngredientModel.find();

    // res.status(200).json({
    //   status: "success",
    //   payload: { foodItems: [...foodItems], ingredients: [...ingredients] },
    // });

    const user = await UserModel.findById(req.authId);

    if (!user) {
      return res.status(400).json({ message: "test" });
    }

    const business = await BusinessModel.findById(user.businessId);

    if (!business) {
      return res.status(400).json({ message: "Could not find business." });
    }

    res.status(200).json({
      status: "success",
      payload: {
        foodItems: [...business.foodItems],
        ingredients: [...business.ingredients],
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "Could not get initial data from server.",
    });
  }
};

export const addIngredient: RequestHandler = async (req, res, next) => {
  try {
    const reqObj: IIngredient = {
      title: req.body.title,
      price: req.body.price,
      category: req.body.category,
    };

    // const [user, business] = await getUserAndBusiness(req.authId);
    const user = await UserModel.findById(req.authId);
    if (!user) {
      throw new Error();
    }
    await BusinessModel.findByIdAndUpdate(user.businessId, {
      $push: { ingredients: reqObj },
    });

    res.status(200).json({
      status: "success",
      dataCreated: reqObj,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "Could not add ingredient.",
    });
  }
};

export const addFoodItem: RequestHandler = async (req, res, next) => {
  try {
    const reqObj: IFoodItem = {
      title: req.body.title,
      price: req.body.price,
      initPrice: req.body.initPrice,
      img: req.body.img,
      calories: req.body.calories,
      ingredients: req.body.ingredients,
    };

    const user = await UserModel.findById(req.authId);
    if (!user) {
      throw new Error();
    }

    // authenticate ingredients from req

    const business = await BusinessModel.findById(user.businessId);
    if (!business) {
      throw new Error();
    }
    const ingredients = business.ingredients;
    let newIngredients: string[] = [];
    let ingredientSum = 1 * reqObj.initPrice;

    // Checks to see if ingredient sent with req is in the business ingredients array.
    // Gets final foodItem price.
    for (let offeredIngredient of reqObj.ingredients) {
      for (let allowedIngredient of ingredients) {
        if (allowedIngredient._id.toString() === offeredIngredient) {
          newIngredients.push(allowedIngredient._id.toString());
          ingredientSum += allowedIngredient.price;
        }
      }
    }

    const finalObj: IFoodItem = {
      title: reqObj.title,
      price: ingredientSum,
      initPrice: 1 * reqObj.price,
      ingredients: newIngredients,
      // change to path
      img: reqObj.img,
      calories: 1 * reqObj.calories,
    };

    await BusinessModel.findByIdAndUpdate(user.businessId, {
      $push: { foodItems: finalObj },
    });

    res.status(200).json({
      status: "success",
      foodItem: finalObj,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "Could not add food item.",
    });
  }
};
