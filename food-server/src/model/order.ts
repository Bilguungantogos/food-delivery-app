import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderNo: String,
    products: [],
    payment: {
      paymentAmount: Number,
      paymentMethod: {
        type: String,
        enum: ["cash", "cart"],
      },
      status: { type: String, enum: ["paid", "unpaid"], default: "unpaid" },
    },
    paidDate: { type: Date, default: null },
    createdDate: { type: Date, default: Date.now },
    address: {
      khoroo: { type: String },
      duureg: { type: String },
      buildingNo: { type: String },
      info: String,
      phone: String,
    },
    delivery: {
      status: {
        type: String,
        enum: ["Pending", "Progressing", "Delievered"],
        default: "Pending",
      },
      delieveredAt: { type: Date, default: null },
    },
  },
  { timestamps: true }
);

// userSchema.methods.checkPassword = async function (password: string) {
//   return await bcrypt.compare(password, this.password);
// };

const Order = model("Order", orderSchema);
export default Order;
