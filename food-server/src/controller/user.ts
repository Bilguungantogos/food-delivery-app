import { NextFunction, Request, Response } from "express";
import User from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail";
import MyError from "../utils/myError";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = req.body;
    const user = await User.create({ ...newUser });
    const verifyToken = jwt.sign(
      { email: user.email },
      process.env.JWT_PRIVATE_KEY as string,
      {
        expiresIn: "5m",
      }
    );
    sendEmail({ email: user.email, token: verifyToken });
    res.status(201).json({
      message:
        "Шинэ хэрэглэгчийг амжилттай бүртгэлээ. Таны бүртгэлтэй имэйл хаягруу баталгаажуулах имэйл илгээлээ.",
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userEmail, userPassword } = req.body;
    const user = await User.findOne({ email: userEmail })
      .select("+password")
      .lean();
    if (!user) {
      throw new MyError(`${userEmail}-тэй хэрэглэгч бүртгэлгүй байна.`, 400);
    }
    const isValid = await bcrypt.compare(userPassword, user.password);

    if (!isValid) {
      throw new MyError(`Имэйл эсвэл нууц үг буруу байна.`, 401);
    }
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_PRIVATE_KEY as string,
      { expiresIn: process.env.JWT_EXPIRE_IN }
    );
    const { password, ...otherParams } = user;
    res.status(201).json({
      message: "Хэрэглэгч амжилттай нэвтэрлээ",
      token,
      user: otherParams,
    });
  } catch (error) {
    next(error);
  }
};
