import { Router } from "express";
import { signup } from "../controller/user";

export const authRoute = Router();

authRoute.route("/signup").post(signup);
