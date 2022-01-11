import mongoose from "mongoose";

interface IFoodItem extends mongoose.Document {
  title: string;
  price: number;
  initPrice: number;
  img: string;
  calories: number;
}

const foodItemModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
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
  ingredients: {
    type: Array,
    required: true,
  },
});

const FootItemModel = mongoose.model<IFoodItem>("FootItemModel", foodItemModel);

export default FootItemModel;
