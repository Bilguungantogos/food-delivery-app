import { NextFunction, Request, Response } from "express";
import Food from "../model/food";
import Basket from "../model/basket";
import MyError from "../utils/myError";
import cloudinary from "../utils/cloudinary";
import { IReq } from "../utils/interface";

export const addBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const findBasket = await Basket.findOne({ user: req.user._id });
    if (!findBasket) {
      const basket = await Basket.create({
        user: req.user._id,
        foods: [{ food: req.body.foodId, quantity: req.body.quantity }],
        totalPrice: req.body.price,
      });
    } else {
      const findFoods = findBasket.foods;
      const findIndex = findFoods.findIndex((el) => el.food == req.body.foodId);
      console.log(findIndex);
      if (findIndex !== -1) {
        findBasket.foods[findIndex].set({
          quantity: Number(req.body.quantity),
        });
        res
          .status(200)
          .json({ message: "sagsand hoolnii too amjilttai soligdloo" });
      } else {
        findBasket.foods.push({
          food: req.body.foodId,
          quantity: req.body.quantity,
        });
      }
      await findBasket.save();
    }
    res.status(201).json({ message: "user's basket added successfully." });
  } catch (error) {
    next(error);
  }
};

export const getAllBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const basket = await Basket.findOne({ user: req.user._id });
    if (basket) {
      res.status(200).json({ basket });
    } else {
      res.status(404).json({ message: "Basket not found for this user." });
    }
  } catch (error) {
    next(error);
  }
};

export const updateBasket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updateFood = req.body;
    const { foodId } = req.params;
    const food = await Food.findByIdAndUpdate(foodId, updateFood);
    if (!food) {
      throw new MyError(`${foodId} тай хоол олдсонгүй`, 400);
    }
    res.status(200).json({ message: `${foodId} тай хоол шинэчлэгдлээ.`, food });
  } catch (error) {
    next(error);
  }
};

export const deleteBasket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const deleteFood = await Food.findByIdAndDelete(foodId);
    res.status(200).json({
      message: `${foodId} тай хоол устгалаа.`,
      deleteFood,
    });
  } catch (error) {
    next(error);
  }
};

export const getBasket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const findFood = await Food.findById(foodId);

    if (!findFood) {
      throw new MyError(`${foodId} тай хоол олдсонгүй.`, 400);
    }

    res.status(200).json({ message: `${foodId} тай хоол олдлоо.`, findFood });
  } catch (error) {
    next(error);
  }
};
