import { Router } from "express";
import { uploadFile } from "../controller/uploadController";
import multer from "multer";

export const uploadRoute = Router();
const upload = multer({ dest: "./uploads" });

uploadRoute.route("/").post(upload.single("image"), uploadFile);
