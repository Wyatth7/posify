import express from "express";
import checkIfAuthenticated from "../auth/auth-check/token-check";
import * as businessController from "./../controllers/business-controller";

const router = express.Router();

router.post("/createBusiness", businessController.createBusiness);

export default router;
