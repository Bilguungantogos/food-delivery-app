import { Router } from "express";
import { authenticate } from "../middleWare/auth";
import { createOrder1 } from "../controller/orderController";

export const orderRoute = Router();

orderRoute.route("/").post(authenticate, createOrder1);
