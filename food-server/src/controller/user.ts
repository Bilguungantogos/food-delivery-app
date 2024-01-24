import { Request, Response } from "express";
import User from "../model/user";

export const signup = async (req: Request, res: Response) => {
  try {
    // const newUser = {
    //   name: "user1",
    //   email: "user1@gmail.com",
    //   address: "BZD",
    //   password: "user123",
    // };
    const { name, email, address, password } = req.body;
    const hashedPassword = await import("bcrypt-ts").then((bcrypt) =>
      bcrypt.hashSync(password, 10)
    );
    res.json({ message: "New user created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed" });
  }
};
