import { Router } from "express";
import {
  addBasket,
  deleteBasketFood,
  getAllBasket,
  getBasket,
  updateBasket,
} from "../controller/basketController";
import { authenticate, authorize } from "../middleWare/auth";

export const basketRoute = Router();

basketRoute
  .route("/")
  .get(authenticate, getAllBasket)
  .post(authenticate, addBasket)
  .delete(authenticate, deleteBasketFood);
basketRoute.route("/:basketId").get(getBasket).put(updateBasket);
