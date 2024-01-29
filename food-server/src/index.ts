import express, { Application, Request, Response } from "express";
import Color from "colors";
import { connectDB } from "./config/db";
import { authRoute } from "./router/authRoutes";
import { userRoute } from "./router/userRoute";
import { verifyRoute } from "./router/verifyRoute";
import cors from "cors";

import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;
const app: Application = express();

connectDB(MONGO_URI);

app.use(cors());
app.use(express.json());
// app.use("/auth");
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/verify", verifyRoute);

app.listen(8080, () => {
  console.log(Color.inverse("server is running"));
});
