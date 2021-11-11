import mongoose from "mongoose";

export default mongoose.config({
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
