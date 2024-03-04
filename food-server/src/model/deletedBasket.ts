import { Schema, model } from "mongoose";

const deletedBasketSchema = new Schema({
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

const DeletedBasket = model("DeletedBasket", deletedBasketSchema);
export default DeletedBasket;
