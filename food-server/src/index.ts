import express, { Application, Request, Response } from "express";
import Color from "colors";
import mongoose from "mongoose";
import User from "./model/user";
import { connectDB } from "./config/db";
import { authRoute } from "./router/authRoutes";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;
const app: Application = express();

connectDB(MONGO_URI);

// app.use("/auth");
app.use("/auth", authRoute);

app.listen(8080, () => {
  console.log(Color.inverse("server is running"));
});
