import mongoose from "mongoose";

const varientSchema = new mongoose.Schema({
  name: { type: String },
  options: [{ type: String }],
});

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    discription: { type: String },
    price: { type: Number, required: true },
    image: [{ type: String }],
    category: { type: String },
    stock: { type: Number, default: 0 },
    variants: [varientSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
