import { RequestHandler } from "express";
import {
  deleteUser,
  generateUser,
  getUserAuthToken,
  IUser,
} from "../../auth/controllers/user-auth-controller";
import BusinessModel from "../../models/BusinessModel";
import UserModel from "../../models/UserModel";

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
    const token = await getUserAuthToken(user.uid);

    const business = await BusinessModel.create({
      users: [
        {
          _id: user.uid,
        },
      ],
      title: req.body.title,
    });

    await UserModel.create({
      _id: user.uid,
      firstName: reqData.firstName,
      lastName: reqData.lastName,
      email: user.email,
      role: reqData.role,
      hireDate: Date.now(),
      businessId: business._id,
    });

    res.status(200).json({
      status: "success",
      businessData: business,
      authToken: token,
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

export const addUserToBusiness: RequestHandler = async (req, res, next) => {
  try {
  } catch (err) {
    res.status(200).json({
      status: "fail",
      message: "Could not add user to business.",
    });
  }
};
