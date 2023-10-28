import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Cathegories = model("cathegorie", schema);

export default Cathegories;
