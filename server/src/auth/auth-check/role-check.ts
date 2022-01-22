import { Request, Response, NextFunction } from "express";
import UserModel from "../../models/UserModel";

const checkUserRole = (roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // If the user's role is not in role, deny access to controller.
    try {
      const user = await UserModel.findById(req.authId);
      if (!user) {
        throw new Error();
      }
      if (!roles.includes(user.role)) {
        return res.status(403).json({
          status: "fail",
          message: "Your are not authorized to access this route.",
        });
      }
      return next();
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: "Could not get data from server.",
      });
    }
  };
};

export default checkUserRole;
