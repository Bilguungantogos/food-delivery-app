import { Router } from "express";
import {
  addBasket,
  deleteBasketFood,
  getAllBasket,
} from "../controller/basketController";
import { authenticate, authorize } from "../middleWare/auth";

export const basketRoute = Router();

basketRoute
  .route("/")
  .get(authenticate, getAllBasket)
  .post(authenticate, addBasket);

basketRoute.route("/:foodId").delete(authenticate, deleteBasketFood);
