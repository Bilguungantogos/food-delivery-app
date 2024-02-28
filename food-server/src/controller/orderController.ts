import { NextFunction, Response } from "express";
import { IReq } from "../utils/interface";
import User from "../model/user";
import MyError from "../utils/myError";

export const createOrder1 = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const findUser = await User.findById(req.user._id);
    const newOrder = {
      orderNo: "111",
      payment: {
        paymentAmount: 150000,
      },
      address: {
        khoroo: "6th",
        duureg: "BZD",
        buildingNo: "150th apartment",
        info: "uudnii code 1111",
      },
    };
    if (!findUser) {
      throw new MyError("User not found", 404);
    }

    findUser.orders.push(newOrder);
    await findUser.save();
    res.send("Order created successfully");
  } catch (error) {
    next(error);
  }
};
