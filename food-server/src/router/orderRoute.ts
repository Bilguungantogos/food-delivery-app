import { Router } from "express";
import { authenticate } from "../middleWare/auth";
import { createOrder1, getAllOrder } from "../controller/orderController";

export const orderRoute = Router();

orderRoute
  .route("/")
  .post(authenticate, createOrder1)
  .get(authenticate, getAllOrder);
