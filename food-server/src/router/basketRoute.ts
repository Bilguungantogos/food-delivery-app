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
  .post(authenticate, addBasket);

basketRoute
  .route("/:foodId")
  .get(getBasket)
  .put(updateBasket)
  .delete(authenticate, deleteBasketFood);
