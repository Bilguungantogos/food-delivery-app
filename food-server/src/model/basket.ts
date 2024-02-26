import { Schema, model } from "mongoose";

const basketSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  foods: [
    {
      food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
      quantity: Number,
    },
  ],
  totalPrice: Number,
});

const Model = model("Basket", basketSchema);
export default Model;
