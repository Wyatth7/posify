import express from "express";
import * as authController from "./../controllers/user-auth-controller";

const router = express.Router();
router.post("/signUp", authController.createUser);
router.get("/checkAuthUser", authController.checkUserToken);

export default router;
