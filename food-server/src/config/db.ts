import mongoose from "mongoose";
import Color from "colors";

export const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log(Color.bgGreen("Connected"));
  } catch (error) {
    console.log(Color.bgRed("error"), error);
  }
};
