import mongoose from "mongoose";
import { foodItemModel, IFoodItem } from "./FoodItemModel";

interface IOrderModel extends mongoose.Document {
  orderNumber: number;
  foodItem: [IFoodItem];
  paymentType: string;
  startTime: Date;
  endTime: Date;
}

const orderModel = new mongoose.Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  foodItem: [Object],
  paymentType: {
    type: String,
    required: true,
  },
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
