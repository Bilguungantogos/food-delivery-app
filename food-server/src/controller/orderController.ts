import { NextFunction, Response } from "express";
import { IReq } from "../utils/interface";
import User from "../model/user";
import MyError from "../utils/myError";
import Order from "../model/order";
import Basket from "../model/basket";
import DeletedBasket from "../model/deletedBasket";

export const createOrder1 = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const orderNo = () => {
      return Math.floor(Math.random() * 100000) + 1;
    };
    const findOrder = await Order.findOne({ user: req.user._id });
    const findBasket = await Basket.findOne({ user: req.user._id });
    if (!findOrder) {
      const order = await Order.create({
        user: req.user._id,
        orders: [
          {
            orderNo: "#" + orderNo(),
            products: findBasket?.foods,
            payment: {
              paymentAmount: findBasket?.totalPrice,
            },
            address: req.body,
          },
        ],
      });
      // const findBasket = await Basket.findById(req.body.products._id);
      // const deletedBasket = await DeletedBasket.create(req.body.basket._id);
      await Basket.findByIdAndDelete(findBasket?._id);
      res.status(201).json({ message: "created" });
    } else {
      const findOrders = findOrder.orders;
      findOrders.push({
        orderNo: "#" + orderNo(),
        products: findBasket?.foods,
        payment: {
          paymentAmount: findBasket?.totalPrice,
        },
        address: req.body.orderValues,
      });
      await Basket.findByIdAndDelete(findBasket?._id);
      await findOrder.save();
      // const savedBasket = await (
      //   await findBasket.save()
      // ).populate("foods.food");
    }
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
    const order = await Order.findOne({ user: req.user._id });
    if (order) {
      // await order.populate("user");
      res.status(200).json({ order });
    } else {
      res.status(404).json({ message: "Order not found for this user." });
    }
  } catch (error) {
    next(error);
  }
};
