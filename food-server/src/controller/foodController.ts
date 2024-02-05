import { NextFunction, Request, Response } from "express";
import Food from "../model/food";
import MyError from "../utils/myError";
import Category from "../model/category";

export const createFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newFood = req.body;
    const createdFood = await Food.create(newFood);
    res
      .status(201)
      .json({ message: "хоол created successfully.", createdFood });
  } catch (error) {
    next(error);
  }
};

export const getFood = async (
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

export const getAllFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allFood = await Food.find().populate("category", "_id name ");

    res.status(200).json({ message: `Бүх хоол олдлоо.`, allFood });
  } catch (error) {
    next(error);
  }
};

export const updateFood = async (
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

export const deleteFood = async (
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
