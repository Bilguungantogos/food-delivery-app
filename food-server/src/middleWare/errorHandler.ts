import { Response, Request, NextFunction } from "express";

interface IMyError extends Error {
  statusCode: number;
}

export const errorHandler = (
  err: IMyError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("err midd", err.stack?.red.underline);
  console.log("err midd", err.statusCode);
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "Internal server error" });
};
