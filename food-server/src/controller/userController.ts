import { NextFunction, Request, Response } from "express";
import User from "../model/user";
import MyError from "../utils/myError";

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

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.params;
    const user = await User.findById(userId);
    res.status(201).json({ message: " хэрэглэгч олдлоо", user });
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndDelete(userId);
    if (!userId) {
      throw new MyError(`${userId}-тэй олдсонгүй.`, 400);
    }
  } catch (error) {
    next(error);
  }
};
