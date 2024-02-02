import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    require: [true, "Категорын нэрийг оруулна"],
    unique: true,
    maxlength: [50, "Категорын нэрний урт тэмдэгтээс хэтрэхгүй байна"],
  },
  description: {
    type: String,
    require: [true, "Категорын талбарыг заавал оруулна"],
  },
  image: {
    type: String,
    default: "no-category-photo",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Category = model("category", categorySchema);
export default Category;
