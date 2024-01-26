import { Request, Response } from "express";
import User from "../model/user";

export const getUsers = async (req: Request, res: Response) => {
  console.log("Headers", req.headers);
  try {
    const users = await User.find({});
    res.status(201).json({ message: "Бүх хэрэглэгч олдлоо", users });
  } catch (error) {
    res.status(500).json({
      message: "Бүх хэрэглэгчийн мэдээллийг авах үед алдаа гарлаа.",
      error,
    });
  }
};
