import { RequestHandler } from "express";
import FoodItemModel from "./../models/FoodItemModel";
import IngredientModel from "./../models/IngredientModel";
import IIngredient from "./../interfaces/IIngredients";
import IFoodItem from "../interfaces/IFoodItem";

export const getInitData: RequestHandler = async (req, res, next) => {
  try {
    const foodItems = await FoodItemModel.find();
    const ingredients = await IngredientModel.find();

    res.status(200).json({
      status: "success",
      payload: { foodItems: [...foodItems], ingredients: [...ingredients] },
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

    await IngredientModel.create(reqObj);

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

    await FoodItemModel.create(reqObj);

    res.status(200).json({
      status: "success",
      foodItem: reqObj,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "Could not add food item.",
    });
  }
};
