import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} from "../controller/categoryController";
import { authenticate, authorize } from "../middleWare/auth";
import { upload } from "../utils/multer";

export const categoryRoute = Router();

categoryRoute
  .route("/")
  .get(getAllCategory)
  .post(upload.single("image"), createCategory);
categoryRoute
  .route("/:categoryId")
  .get(getCategory)
  .delete(authenticate, authorize("Admin"), deleteCategory)
  .put(updateCategory);
