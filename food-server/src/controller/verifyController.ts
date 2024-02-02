import { NextFunction, Request, Response } from "express";
import { sendEmail } from "../utils/sendEmail";
import bcrypt from "bcrypt";
import User from "../model/user";
import jwt from "jsonwebtoken";
import MyError from "../utils/myError";

export const sendEmailToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;

    const otp = Math.round(Math.random() * 1000)
      .toString()
      .padStart(4, "0");

    const findUser = await User.findOne({ email });

    if (!findUser) {
      throw new MyError("Хэрэглэгч олдсонгүй", 400);
    }
    const salt = await bcrypt.genSalt(10);

    findUser.otp = await bcrypt.hash(otp, salt);

    await findUser.save();

    await sendEmail({ email, otp });

    res.status(201).json({ message: "email yvla" });
  } catch (error) {
    next(error);
  }
};

export const verifyOtp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, otp } = req.body;

    const findUser = await User.findOne({ email });

    if (!findUser) {
      throw new MyError("Хэрэглэгч олдсонгүй", 400);
    }
    const validOtp = await bcrypt.compare(otp, findUser?.otp);

    if (!validOtp) {
      throw new MyError("Код буруу байна", 401);
    }
    res.status(200).json({ message: "OTP is validated" });
  } catch (error) {
    next(error);
  }
};

export const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const findUser = await User.findOne({ email });

    await User.updateOne({ email: email }, { $set: { password: password } });

    res.status(200).json({ message: "Амжилттай пассворд солилоо" });
  } catch (error) {
    next(error);
  }
};

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token } = req.query;

    const { email } = jwt.verify(
      token as string,
      process.env.JWT_PRIVATE_KEY as string
    ) as { email: string };

    const findUser = await User.findOne({ email: email });

    if (!findUser) {
      res.status(500).send("Not verified");
    } else {
      findUser.isVerified = true;
    }

    await findUser?.save();

    res.status(200).send(`<h1 style="color: green">Valid Link </h1>`);
  } catch (error) {
    next(error);
  }
};
