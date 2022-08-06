import admin from "../firebase/init-app";
import { RequestHandler } from "express";
import UserModel from "../../models/UserModel";
import { checkAuth } from "./../auth-check/token-check";
import BusinessModel from "../../models/BusinessModel";
import { customResponses } from "../../helpers/customReposes";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

export const generateUser = async (data: IUser) => {
  return await admin.auth().createUser({
    email: data.email,
    password: data.password,
    displayName: `${data.firstName} ${data.lastName}`,
  });
};

export const deleteUser = async (email: string) => {
  const userId = await checkIfUserCreated(email);
  if (userId.length > 0) {
    await admin.auth().deleteUser(userId);
  }
};

const checkIfUserCreated = async (email: string) => {
  try {
    const user = await admin.auth().getUserByEmail(email);
    if (!user) {
      return "";
    }

    return user.uid;
  } catch (err) {
    return "";
  }
};

export const createBusinessUser: RequestHandler = async (req, res, next) => {
  const user: IUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  };

  try {
    const createdUser = await createUser(user, req.body.businessId);

    if (!createdUser) {
      return customResponses.badRequestReponse("Could not create user.", res);
    }

    return customResponses.successResponse(createdUser, res);
  } catch (err) {
    console.log(err);

    return customResponses.badRequestReponse("Could not create user.", res);
  }
};

export const createGenericUser: RequestHandler = async (req, res, next) => {
  const user: IUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    role: "customer",
  };

  try {
    const createdUser = await createUser(user, req.body.businessId);

    return customResponses.successResponse(createdUser, res);
  } catch (err) {
    console.log(err);

    return customResponses.badRequestReponse("Could not create user.", res);
  }
};

const createUser = async (
  user: IUser,
  businessId: string
): Promise<{
  email: string;
  firstName: string;
  lastName: string;
} | null> => {
  const { email, password, firstName, lastName, role } = user;

  try {
    await generateUser({ email, password, firstName, lastName, role });

    const userId = await (await admin.auth().getUserByEmail(email)).uid;

    const createdUser = await UserModel.create({
      email,
      firstName,
      lastName,
      role,
      _id: userId,
      businessId,
    });

    await BusinessModel.findByIdAndUpdate(businessId, {
      $push: { users: { _id: createdUser._id } },
    });

    const token = await getUserAuthToken(createdUser._id);

    return {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };
  } catch (err) {
    console.log(err);

    try {
      await deleteUser(user.email);
      console.log("User deleted...");
    } catch (nestedError) {
      console.log(nestedError);
    }

    return null;
  }
};

export const checkUserToken: RequestHandler = async (req, res, next) => {
  try {
    const token: any = req.headers.authorization?.split(" ")[1];
    const isAuthenticated = await checkAuth(token);

    if (!isAuthenticated) {
      return res.status(401).json({
        status: "fail",
        payload: {
          isAuthenticated: false,
        },
      });
    }

    res.status(200).json({
      status: "success",
      payload: {
        isAuthenticated: true,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      payload: {
        isAuthenticated: false,
      },
    });
  }
};

export const getUserAuthToken = async (uid: string) => {
  try {
    return await admin.auth().createCustomToken(uid);
  } catch (err) {
    console.log(err);
    return "";
  }
};
