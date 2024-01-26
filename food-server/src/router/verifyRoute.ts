import { Router } from "express";
import { sendEmailToUser } from "../controller/verifyController";

export const verifyRoute = Router();

verifyRoute.route("/send-email").post(sendEmailToUser);
