import { Router } from "express";
import { getUser, getUsers } from "../controller/userController";
import { deleteUser } from "../controller/userController";
import { authenticate, authorize } from "../middleWare/auth";

export const userRoute = Router();

userRoute.route("/").get(authenticate, getUser);
userRoute
  .route("/:userId")
  .delete(authenticate, authorize("Admin"), deleteUser);
