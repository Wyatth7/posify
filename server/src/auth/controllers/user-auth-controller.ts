import admin from "../firebase/init-app";
import { RequestHandler } from "express";
import UserModel from "../../models/UserModel";

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

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName, role } = req.body;

    // const user = await admin.auth().createUser({
    //   email,
    //   password,
    //   displayName: `${firstName} ${lastName}`,
    // });

    await generateUser({ email, password, firstName, lastName, role });

    const userId = await (await admin.auth().getUserByEmail(email)).uid;

    await UserModel.create({
      email,
      firstName,
      lastName,
      role,
      _id: userId,
    });

    return res.status(200).json({
      status: "Success",
      message: `User ${firstName} ${lastName} has been created.`,
    });
  } catch (err) {
    console.log(err);

    try {
      await deleteUser(req.body.email);
    } catch (nestedError) {
      console.log(nestedError);
    }

    return res.status(400).json({
      status: "Fail",
      message: "Could not create user.",
    });
  }
};
