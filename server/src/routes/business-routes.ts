import express from "express";
import * as businessController from "./../controllers/business-controller";

const router = express.Router();

router.post("/createBusiness", businessController.createBusiness);

export default router;
