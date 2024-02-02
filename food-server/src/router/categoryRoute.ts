import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} from "../controller/categoryController";

export const categoryRoute = Router();

categoryRoute.route("/").get(getAllCategory).post(createCategory);
categoryRoute
  .route("/:categoryId")
  .get(getCategory)
  .delete(deleteCategory)
  .put(updateCategory);
