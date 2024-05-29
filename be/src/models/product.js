import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isShow: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Product", productSchema);
