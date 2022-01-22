import express from "express";
import checkUserRole from "../auth/auth-check/role-check";
import checkIfAuthenticated from "../auth/auth-check/token-check";
import * as kiosk from "../controllers/kiosk-controller";

const router = express.Router();

router.get(
  "/getInitData",
  checkIfAuthenticated,
  checkUserRole(["kiosk", "employee", "manager", "admin"]),
  kiosk.getInitData
);
router
  .patch(
    "/addFoodItem",
    checkIfAuthenticated,
    checkUserRole(["admin"]),
    kiosk.addFoodItem
  )
  .patch(
    "/addIngredient",
    checkIfAuthenticated,
    checkUserRole(["admin"]),
    kiosk.addIngredient
  );

export default router;
