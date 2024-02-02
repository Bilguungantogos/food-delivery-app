import { NextFunction, Request, Response } from "express";
import User from "../model/user";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Headers", req.headers);
  try {
    const users = await User.find({});
    res.status(201).json({ message: "Бүх хэрэглэгч олдлоо", users });
  } catch (error) {
    next(error);
  }
};
