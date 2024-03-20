import { Router } from "express";
import { uploadFile } from "../controller/uploadController";
import { upload } from "../utils/multer";

export const uploadRoute = Router();

uploadRoute.route("/").post(upload.single("image"), uploadFile);
