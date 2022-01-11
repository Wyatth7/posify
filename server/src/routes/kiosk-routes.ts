import express from "express";
import * as kiosk from "../controllers/kiosk-controller";

const router = express.Router();

router.get("/getInitData", kiosk.getInitData);
router
  .post("/addFoodItem", kiosk.addFoodItem)
  .post("/addIngredient", kiosk.addIngredient);

export default router;
