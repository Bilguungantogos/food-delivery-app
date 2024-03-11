import { NextFunction, Request, Response } from "express";
import User from "../model/user";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";

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

export const getUser = async (req: IReq, res: Response, next: NextFunction) => {
  try {
    const findUser = await User.findById(req.user._id);
    res.status(201).json({ message: " хэрэглэгч олдлоо", findUser });
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
