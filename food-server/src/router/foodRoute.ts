import { Router } from "express";
import {
  createFood,
  deleteFood,
  getAllFood,
  getFood,
  updateFood,
} from "../controller/foodController";
import { upload } from "../utils/multer";
import { authorize } from "../middleWare/auth";

export const foodRoute = Router();

foodRoute.route("/").get(getAllFood).post(upload.single("image"), createFood);
foodRoute.route("/:foodId").get(getFood).delete(deleteFood).put(updateFood);
