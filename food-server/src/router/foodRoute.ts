import { Router } from "express";
import {
  createFood,
  deleteFood,
  getAllFood,
  getFood,
  updateFood,
} from "../controller/foodController";

export const foodRoute = Router();

foodRoute.route("/").get(getAllFood).post(createFood);
foodRoute.route("/:foodId").get(getFood).delete(deleteFood).put(updateFood);
