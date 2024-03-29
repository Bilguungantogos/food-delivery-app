import express, { Application, Request, Response } from "express";
import Color from "colors";
import { connectDB } from "./config/db";
import { authRoute } from "./router/authRoutes";
import { userRoute } from "./router/userRoute";
import { verifyRoute } from "./router/verifyRoute";
import { categoryRoute } from "./router/categoryRoute";
import cors from "cors";

import dotenv from "dotenv";
import { errorHandler } from "./middleWare/errorHandler";
import { foodRoute } from "./router/foodRoute";
import { uploadRoute } from "./router/uploadRoute";
import { basketRoute } from "./router/basketRoute";
import { orderRoute } from "./router/orderRoute";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;
const app: Application = express();

connectDB(MONGO_URI);

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/category", categoryRoute);
app.use("/foods", foodRoute);
app.use("/basket", basketRoute);
app.use("/upload", uploadRoute);
app.use("/verify", verifyRoute);
app.use("/orders", orderRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Food Delivery</h1>");
});
app.use(errorHandler);

app.listen(8080, () => {
  console.log(Color.inverse("server is running"));
});
