import { NextFunction, Response } from "express";
import { IReq } from "../utils/interface";
import User from "../model/user";
import MyError from "../utils/myError";
import Order from "../model/order";
import Basket from "../model/basket";

export const createOrder1 = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderNo = () => {
      return Math.floor(Math.random() * 100000) + 1;
    };
    const findBasket = await Basket.findOne({ user: req.user._id });
    const findUser = await User.findById(req.user._id);
    const order = await Order.create({
      user: findUser,
      orderNo: "#" + orderNo(),
      products: findBasket?.foods,
      payment: {
        paymentAmount: findBasket?.totalPrice,
      },
      address: req.body,
    });
    await Basket.findByIdAndDelete(findBasket?._id);
    res.status(201).json({ message: "user's order created successfully." });
  } catch (error) {
    next(error);
  }
};

export const getAllOrder = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const orders = await Order.find();
    if (orders) {
      res.status(200).json({ orders });
    } else {
      res.status(404).json({ message: "Order not found for this user." });
    }
  } catch (error) {
    next(error);
  }
};
