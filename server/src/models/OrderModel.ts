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
  addressData: Object,
  deliveryMethod: Object,
  customerInfo: Object,
  totalPrice: Number,
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
