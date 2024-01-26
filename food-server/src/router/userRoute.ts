import { Router } from "express";
import { getUsers } from "../controller/userController";

export const userRoute = Router();

userRoute.route("/").get(getUsers);
