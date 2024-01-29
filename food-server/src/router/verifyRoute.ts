import { Router } from "express";
import {
  sendEmailToUser,
  verifyOtp,
  changePassword,
} from "../controller/verifyController";

export const verifyRoute = Router();

verifyRoute.route("/send-email").post(sendEmailToUser);
verifyRoute.route("/otp").post(verifyOtp);
verifyRoute.route("/changepassword").put(changePassword);
