import { Router } from "express";
import {
  addBasket,
  deleteBasket,
  getAllBasket,
  getBasket,
  updateBasket,
} from "../controller/basketController";
import { authenticate, authorize } from "../middleWare/auth";

export const basketRoute = Router();

basketRoute.route("/").get(getAllBasket).post(authenticate, addBasket);
basketRoute
  .route("/:basketId")
  .get(getBasket)
  .delete(deleteBasket)
  .put(updateBasket);
