import mongoose from "mongoose";
import { foodItemModel } from "./FoodItemModel";

const orderModel = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  foodItem: foodItemModel,
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

export { orderModel };
