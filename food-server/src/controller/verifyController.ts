import { Request, Response } from "express";
import { sendEmail } from "../utils/sendEmail";

export const sendEmailToUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    await sendEmail(email, "Verify Account for Food platform");
    res.status(201).json({ message: "email yvla" });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};
