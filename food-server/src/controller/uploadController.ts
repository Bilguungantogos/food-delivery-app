import { NextFunction, Request, Response } from "express";
import cloudinary from "../utils/cloudinary";

export const uploadFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await cloudinary.uploader.upload(req.file?.path!);
    res.send("ok" + result.secure_url);
  } catch (error) {
    next(error);
  }
};
