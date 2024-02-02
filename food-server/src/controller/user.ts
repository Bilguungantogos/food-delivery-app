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
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newUser.password, salt);
    const user = await User.create({ ...newUser, password: hashedPassword });
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
    const { email, password } = req.body;
    const user = await User.findOne({ email })
      .select("+password")
      .select("+isVerified");

    if (!user) {
      // return res.status(400).json({ message: `Хэрэгэлэгч бүртгэлгүй байна.` });
      throw new MyError(`Хэрэгэлэгч бүртгэлгүй байна.`, 400);
    }
    if (!user.isVerified) {
      throw new MyError(`Та бүртгэлээ баталгаажуулан нэвтэрнэ үү.`, 400);
    }
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      throw new MyError(`Имэйл эсвэл нууц үг буруу байна.`, 401);
    }
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_PRIVATE_KEY as string,
      { expiresIn: process.env.JWT_EXPIRE_IN }
    );
    res
      .status(201)
      .json({ message: "Хэрэглэгчийг амжилттай нэвтэрлээ", token });
  } catch (error) {
    next(error);
  }
};
