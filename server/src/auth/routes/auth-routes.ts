import express from "express";
import { checkIfAuthenticated } from "../auth-check/token-check";
import * as authController from "./../controllers/user-auth-controller";

const router = express.Router();
router.post("/signUp", authController.createUser);
router.get(
  "/checkAuthUser",
  checkIfAuthenticated,
  authController.checkUserToken
);

export default router;
