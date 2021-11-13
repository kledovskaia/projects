import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  _id: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  imgUrl: String,
  password: {
    type: String,
    require: true,
  },
});

export const User = mongoose.model("User", userSchema);
