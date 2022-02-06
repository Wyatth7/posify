import mongoose from "mongoose";
import { foodItemModel, IFoodItem } from "./FoodItemModel";

interface IOrderModel extends mongoose.Document {
  orderNumber: number;
  foodItem: [IFoodItem];
  startTime: Date;
  endTime: Date;
}

const orderModel = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  foodItem: [foodItemModel],
  startTime: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  endTime: {
    type: Date,
    default: null,
  },
});

export { orderModel, IOrderModel };
