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
        next("You are not authorized to make this request.");
      }
      return next();
    } catch (err) {
      next("You are not authorized to make this request.");
    }
  };
};

export default checkUserRole;
