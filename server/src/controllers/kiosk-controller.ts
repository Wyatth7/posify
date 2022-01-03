import { RequestHandler } from "express";

export const getInitData: RequestHandler = (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "hello",
  });
};
