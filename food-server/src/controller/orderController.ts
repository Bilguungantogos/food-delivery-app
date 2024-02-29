import { NextFunction, Response } from "express";
import { IReq } from "../utils/interface";
import User from "../model/user";
import MyError from "../utils/myError";
import Order from "../model/order";

export const createOrder1 = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    // const findUser = await User.findById(req.user._id);
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
    // if (!findUser) {
    //   throw new MyError("User not found", 404);
    // }

    // findUser.orders.push(newOrder);
    // await findUser.save();
    // res.send("Order created successfully");
    const findOrder = await Order.findOne({ user: req.user._id });
    if (!findOrder) {
      const basket = await Order.create({
        user: req.user._id,
        orders: [
          {
            orderNo: req.body.orderNo,
            payment: {
              paymentAmount: req.body.payment.paymentAmount,
            },
            address: {
              khoroo: req.body.address.khoroo,
              duureg: req.body.address.duureg,
              buildingNo: req.body.address.buildingNo,
              info: req.body.address.info,
            },
          },
        ],
      });
    } else {
      const findOrders = findOrder.orders;
      findOrders.push({
        orderNo: req.body.orderNo,
        payment: {
          paymentAmount: req.body.payment.paymentAmount,
        },
        address: {
          khoroo: req.body.address.khoroo,
          duureg: req.body.address.duureg,
          buildingNo: req.body.address.buildingNo,
          info: req.body.address.info,
        },
      });
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
