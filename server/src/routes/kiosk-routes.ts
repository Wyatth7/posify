import express from "express";
import checkUserRole from "../auth/auth-check/role-check";
import checkIfAuthenticated from "../auth/auth-check/token-check";
import * as kiosk from "../controllers/kisok-controllers/kiosk-controller";
import * as order from "../controllers/kisok-controllers/kisok-orders";

const router = express.Router();

router.get(
  "/getInitData",
  checkIfAuthenticated,
  checkUserRole(["kiosk", "employee", "manager", "admin", "owner"]),
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
  )
  .patch(
    "/createOrder",
    checkIfAuthenticated,
    checkUserRole(["kiosk", "employee", "manager", "admin"]),
    order.createOrder
  );

export default router;
