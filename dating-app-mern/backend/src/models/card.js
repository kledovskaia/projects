import { Schema, model } from "mongoose";

const cardSchema = new Schema({
  name: String,
  imgUrl: String,
});
export const Card = model("Card", cardSchema);
