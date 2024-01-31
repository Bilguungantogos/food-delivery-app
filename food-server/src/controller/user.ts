import { Request, Response } from "express";
import User from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail";

export const signup = async (req: Request, res: Response) => {
  try {
    const newUser = req.body;
    const user = await User.create(newUser);
    res.status(201).json({
      message:
        "Шинэ хэрэглэгчийг амжилттай бүртгэлээ. Таны бүртгэлтэй имэйл хаягруу баталгаажуулах имэйл илгээлээ.",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Шинэ хэрэглэгч бүртгэхэд алдаа гарлаа.", error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({ message: `Хэрэгэлэгч бүртгэлгүй байна.` });
    }
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res
        .status(400)
        .json({ message: `Имэйл эсвэл нууц үг буруу байна.` });
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
    res
      .status(500)
      .json({ message: "Шинэ хэрэглэгч бүртгэхэд алдаа гарлаа.", error });
  }
};
