import admin from "../firebase/init-app";
import { RequestHandler } from "express";

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    const user = await admin.auth().createUser({
      email,
      password,
      displayName: `${firstName} ${lastName}`,
    });

    return res.status(200).json({
      status: "Success",
      message: `User ${firstName} ${lastName} has been created.`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      status: "Fail",
      message: "Could not create user.",
    });
  }
};
