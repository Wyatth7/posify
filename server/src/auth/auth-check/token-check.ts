import { RequestHandler } from "express";
import admin from "./../firebase/init-app";

const getAuthToken: RequestHandler = (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    req.authToken = req.headers.authorization.split(" ")[1];
  } else {
    req.authToken = null;
  }
  next();
};

export const checkIfAuthenticated: RequestHandler = (req, res, next) => {
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;

      const userInfo = await admin.auth().verifyIdToken(authToken);

      req.authId = userInfo.uid;

      return next();
    } catch (e) {
      return res
        .status(401)
        .send({ error: "You are not authorized to make this request" });
    }
  });
};

export default checkIfAuthenticated;
