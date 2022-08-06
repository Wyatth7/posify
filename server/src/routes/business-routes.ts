import express from "express";
import checkUserRole from "../auth/auth-check/role-check";
import checkIfAuthenticated from "../auth/auth-check/token-check";
import * as businessController from "../controllers/business-functions/business-controller";

const router = express.Router();

router.post("/createBusiness", businessController.createBusiness);

export default router;
