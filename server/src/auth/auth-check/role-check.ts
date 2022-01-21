import { Request, Response, NextFunction } from "express";

const checkUserRole = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // If the user's role is not in roll, deny access to controller.
    if (!roles.includes(res.locals.user.role)) {
      return next({
        message: "You do not have access to preform this action.",
      });
    }

    return next();
  };
};

export default checkUserRole;
