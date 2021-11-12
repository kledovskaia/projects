import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
  name: String,
  imgUrl: String,
});
export const Card = mongoose.model("Card", cardSchema);
