import express from "express";
import checkUserRole from "../auth-check/role-check";
import checkIfAuthenticated from "../auth-check/token-check";
import * as authController from "./../controllers/user-auth-controller";

const router = express.Router();
router.post("/signUp", authController.createGenericUser);
router.post(
  "/createBusinessUser",
  checkIfAuthenticated,
  checkUserRole(["admin", "manager"]),
  authController.createBusinessUser
);
router.get("/checkAuthUser", authController.checkUserToken);

export default router;
