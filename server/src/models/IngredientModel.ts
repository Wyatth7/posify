import mongoose from "mongoose";

interface IIngredientModel extends mongoose.Document {
  title: string;
  price: number;
  category: number;
}

const ingredientModel = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const IngredientModel = mongoose.model<IIngredientModel>(
  "IngredientModel",
  ingredientModel
);

export default IngredientModel;
