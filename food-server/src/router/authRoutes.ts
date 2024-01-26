import { Router } from "express";
import { signup, login } from "../controller/user";

export const authRoute = Router();

authRoute.route("/signup").post(signup);
authRoute.route("/login").post(login);
