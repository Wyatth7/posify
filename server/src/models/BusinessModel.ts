import mongoose from "mongoose";
import { IFoodItem, foodItemModel } from "./FoodItemModel";
import { IIngredientModel, ingredientModel } from "./IngredientModel";
import { orderModel } from "./OrderModel";
import { IUser } from "./UserModel";

interface IBusinessModel extends mongoose.Document {
  title: string;
  users: [IUser];
  foodItems: [IFoodItem];
  ingredients: [IIngredientModel];
}

const businessModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  users: {
    type: Array,
    required: true,
  },
  foodItems: [foodItemModel],
  ingredients: [ingredientModel],
  unfulfilledOrder: [orderModel],
  fulfilledOrder: [orderModel],
});

const BusinessModel = mongoose.model<IBusinessModel>(
  "BusinessModel",
  businessModel
);
export default BusinessModel;
