import { RequestHandler } from "express";
import {
  deleteUser,
  generateUser,
  IUser,
} from "../auth/controllers/user-auth-controller";
import BusinessModel from "../models/BusinessModel";

export const createBusiness: RequestHandler = async (req, res, next) => {
  try {
    // Create a user of which will be the "admin" of the business,
    // then use the user as the initial user of the business.
    const reqData: IUser = {
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      role: "admin",
    };

    // Use createUser function to generate a new user.
    const user = await generateUser(reqData);

    const business = await BusinessModel.create({
      users: [
        {
          _id: user.uid,
          email: user.email,
          firstName: reqData.firstName,
          lastName: reqData.lastName,
          role: reqData.role,
          hireDate: Date.now(),
          terminationDate: null,
        },
      ],
      title: req.body.title,
    });

    res.status(200).json({
      status: "success",
      businessData: business,
    });
  } catch (err) {
    try {
      await deleteUser(req.body.email);
    } catch (nestedError) {
      console.log(nestedError);
    }

    res.status(400).json({
      status: "fail",
      message: "Could not create business system.",
    });
  }
};
