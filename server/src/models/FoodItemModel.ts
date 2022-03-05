import mongoose from "mongoose";
import { ingredientModel } from "./IngredientModel";

interface IFoodItem extends mongoose.Document {
  title: string;
  price: number;
  initPrice: number;
  img: string;
  calories: number;
  ingredients: string[];
}

const foodItemModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  // price = initPrice plus sum of ingredient prices
  price: {
    type: Number,
    required: true,
  },
  initPrice: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  ingredients: [String],
  category: {
    type: String,
    required: true,
  },
});

export { IFoodItem, foodItemModel };
