import { Schema, model } from "mongoose";
import { cathegoryConstants } from "../utils/constants/constants.js";

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: [1, "Can not be less then 1, got {VALUE}"],
    },
    article: {
      type: Number,
      required: true,
    },
    volume: {
      type: String,
      required: true,
      trim: true,
    },
    cathegory: {
      type: String,
      required: true,
      trim: true,
      enum: {
        values: [...cathegoryConstants],
        message: "Cathegory {VALUE} is not present in the shop",
      },
    },
    imgURL: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Item = model("item", schema);

export default Item;
