import { Request, Response } from "express";
import { sendEmail } from "../utils/sendEmail";
import bcrypt from "bcrypt";
import User from "../model/user";

export const sendEmailToUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const otp = Math.round(Math.random() * 1000)
      .toString()
      .padStart(4, "0");

    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(400).json({ message: "Хэрэглэгч олдсонгүй" });
    }
    const salt = await bcrypt.genSalt(10);

    findUser.otp = await bcrypt.hash(otp, salt);

    await findUser.save();

    await sendEmail(email, otp);

    res.status(201).json({ message: "email yvla" });
  } catch (error) {
    res.status(400).json({
      message: "Email илгээх үед алдаа гарлаа.",
      error,
    });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;

    const findUser = await User.findOne({ email });

    if (!findUser) {
      return res.status(400).json({ message: "Хэрэглэгч олдсонгүй" });
    }
    const validOtp = await bcrypt.compare(otp, findUser?.otp);

    if (!validOtp) {
      return res.status(400).json({ message: "Код буруу байна" });
    }
    res.status(200).json({ message: "OTP is validated" });
  } catch (error) {
    res.status(500).json({ message: "Server is internal error" });
  }
};

export const changePassword = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    res.status(200).json({ message: "OTP is validated" });
  } catch (error) {
    res.status(500).json({ message: "Server is internal error" });
  }
};
